import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { isCreator } from '../lib/auth'
import parse from 'html-react-parser'
import Rating from 'react-rating'

export default function singleCompany({ match, history }) {
  const id = match.params.companyId
  const [company, updateCompany] = useState({})
  const [text, setText] = useState('')
  const [error, updateError] = useState('')

  const token = localStorage.getItem('token')
  const type = localStorage.getItem('type')
  const [rated, updateRated] = useState(false)
  const [rating, updateRating] = useState('')

  useEffect(() => {
    async function fetchCompany() {
      try {
        const { data } = await axios.get(`/api/company/${id}`)
        updateCompany(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchCompany()
  }, [])

  if (!company.jobs) return null
  if (!company.comments) return null

  // ! updating ratings 
  function rater(company) {
    const newRating = company.ratings.map(item => Number(item.rating))
    const numOfRatings = newRating.length
    //console.log(newRating)
    if (newRating.length === 0) {
      return //console.log('hello')
    } else {
      return ratingCalc(newRating, numOfRatings)
    }
  }

  function ratingCalc(newRating, numOfRatings) {
    const ratingTotal = newRating.reduce((accumulator, currentValue) => accumulator + currentValue)
    const actualRating = ratingTotal / numOfRatings
    return actualRating.toFixed(1)
  }

  async function handleComment(event) {

    try {
      await axios.post(`/api/company/${id}/comment`, { text }, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(resp => {
          setText('')
          updateCompany(resp.data)
        })
    } catch (err) {
      console.log('TYPE', type)
      if (type === 'company-admin') {
        updateError('Companies cannot post comments!')
      } else {
        updateError('Please login to post a comment')
      }
    }
  }

  function handleRating(rating) {
    axios.post(`/api/company/${id}/rating`, { rating }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        updateCompany(resp.data)
        updateRated(true)
      })
  }

  function handleDeleteComment(commentId) {
    axios.delete(`/api/company/${id}/comment/${commentId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        updateCompany(resp.data)
      })
  }

  function handleDeleteCompany(companyId) {
    axios.delete(`/api/company/${company._id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    history.push('/companies')
  }

  return <div className="companyContainer">

    <h1 className="title is-2 has-text-danger">{company.company}</h1>
    <p className="subtitle is-5 has-text-danger">Overall rating: {rater(company)}</p>
    <div>
      <Rating
        initialRating={rater(company)}
        readonly
      />
    </div>
    <div className="columns">
      <div className="column is-one-third-widescreen is-half-tablet is-multiline">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={company.logo} />
            </figure>
          </div>
          <div className="card-content">
            <strong>About: </strong>{company.about}
            {<br></br>}
            <h1 className="title mt-6 is-6"> Rate this company (login required):</h1>
            <div className="subtitle is-5 has-text-danger">
              <Rating
                className={rated ? "rated" : "notrated"}
                initialRating={0}
                fractions={2}
                onChange={updateRating}
                onClick={handleRating}
              />
              <p className={rated ? "notrated" : "rated"}>Thank you for your rating!</p>
            </div>
            <div>{isCreator(company.user._id) && <Link
              to={`/company/${id}/job`}
              className="button is-danger grow mt-4"
            >Post a job</Link>}</div>
          </div>
        </div>
        <div className="comments-section">
          <h1 className="title mt-4 mb-3 is-5 has-text-danger has-text-centered">Comments on this company:</h1>
          {company.comments.map(comment => {
            return <div className="card m-1 p-2" key={comment._id}>
              <h1><strong>User: </strong>{comment.user.name}</h1>
              <p><strong>Comment: </strong>{comment.text}</p>
              <p><strong>Date: </strong>{comment.createdAt.length >= 10
                ? comment.createdAt.slice(0, 10)
                : comment.createdAt}</p>
              {(isCreator(comment.user._id) || localStorage.getItem('mod') === 'true') && <div className="media-right">
                <button
                  className="delete"
                  onClick={() => handleDeleteComment(comment._id)}>
                </button>
              </div>}
            </div>
          })}

          <h1 className="title mt-6 is-6">Worked for this company? Leave a comment below:</h1>

          <div className="control">
            <input className="input" type="text" placeholder="Type your comment here" onChange={event => setText(event.target.value)} value={text} />
            <button onClick={handleComment} className="button is-danger grow mt-4">Submit</button>
            <p className="error" style={{ marginTop: 8 }}>{error}</p>
          </div>
        </div>
      </div>

      <div className="column is-two-thirds-widescreen">
        <h1 className="title has-text-danger has-text-centered">Jobs posted by {company.company} </h1>
        {company.jobs.map(job => {
          //! To parse posted HTML to show nicely in browser
          const html = parse(job.description)
          return <div className="card mb-2" key={job._id}>
            <div className="card-content">
              <h1 className="subtitle"><strong>{job.title}</strong></h1>
              <h1><strong>Description:</strong> {html.length >= 150
                ? html.slice(0, 150) + '...'
                : html}</h1>
              <h1><strong>Salary:</strong> {job.salary}</h1>
              <h1><strong>Location:</strong></h1>{job.location.map((local, index) => {
                return <div key={index}>{local}</div>
              })}
              <Link to={{ pathname: `/job/${job._id}`, state: { companyID: id } }}>
                <button className="button is-success grow mt-4">More Info</button>
              </Link>
            </div>
          </div>
        })}
      </div>
    </div>
    <div className='container is-centered'>
      {localStorage.getItem('mod') === 'true' && <button className="button is-danger is-centered" onClick={() => handleDeleteCompany(company._id)}>Delete Company</button>}
    </div>
  </div>
}
