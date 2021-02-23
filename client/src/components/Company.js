import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

export default function singleCompany({ match, history }) {
  const id = match.params.companyId
  const [company, updateCompany] = useState({})
  const [text, setText] = useState('')
  const token = localStorage.getItem('token')

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
  console.log('COMPANY', company)

  function handleComment() {
    axios.post(`/api/company/${id}/comment`, { text }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        setText('')
        updateCompany(resp.data)
      })
  }

  return <div className="companyContainer">
    
    <h1 className="title is-2 has-text-danger">{company.company}</h1>
    <div className="columns">
      <div className="column is-one-third is-multiline">
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <img src={company.logo} />
            </div>
            <strong>About: </strong>{company.about}
            {<br></br>}
            <strong>Rating: </strong>{company.rating}
          </div>
        </div>
        <div className="comments-section">
          <h1 className="title mt-4 is-5 has-text-danger has-text-centered">Comments on this company:</h1>
          {company.comments.map(comment => {
            return <div className="card mt-4" key={comment._id}>
              <h1><strong>User: </strong>{comment.user.name}</h1>
              <p><strong>Comment: </strong>{comment.text}</p>
              <p><strong>Date: </strong>{comment.createdAt.length >= 10
                ? comment.createdAt.slice(0, 10)
                : comment.createdAt}</p>
            </div>
          })}
          <h1 className="title mt-6 is-6">Leave a comment below:</h1>
          <div className="control">
            <input className="input" type="text" placeholder="Type your comment here" onChange={event => setText(event.target.value)} value={text} />
            <button onClick={handleComment} className="button is-danger grow mt-4">Submit</button>
          </div>

        </div>


      </div>
      <div className="column is-two-thirds">
        <h1 className="title has-text-danger has-text-centered">Jobs posted</h1>
        {company.jobs.map(job => {
          return <div className="card mb-2" key={job._id}>
            <div className="card-content">
              <h1 className="subtitle"><strong>{job.title}</strong></h1>
              <h1><strong>Description:</strong> {job.description}</h1>
              <h1><strong>Salary:</strong> {job.salary}</h1>
              <h1><strong>Location:</strong> {job.location}</h1>
              
              <Link to={{ pathname: `/job/${job._id}`, state: { companyID: id } }}>
                <button className="button is-success grow mt-4">More Info</button>
              </Link>

            </div> 
          </div>

        })}


      </div>
    </div>
  </div>
}