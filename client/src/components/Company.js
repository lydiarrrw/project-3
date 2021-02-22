import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { isCreator } from '../lib/auth'

export default function singleCompany({ match, history }) {
  const id = match.params.companyId
  const [company, updateCompany] = useState({})

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

  console.log('COMPANY.JOBS', company.jobs)
  console.log('COMPANY COMMENTS', company.comments)

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
          <h1 className="title mt-4 is-5 has-text-centered">Comments on this company:</h1>
          {company.comments.map(comment => {
            return <div className="card mt-4" key={comment._id}>
              <h1><strong>User: </strong>{comment.user.name}</h1>
              <p><strong>Comment: </strong>{comment.text}</p>
            </div>
          })}
          <h1 className="title mt-6 is-6">Leave a comment below:</h1>
          <div className="control">
            <input className="input" type="text" placeholder="Type your comment here" />
          </div>
        </div>


      </div>
      <div className="column is-two-thirds">
        <h1 className="title has-text-centered">Jobs posted</h1>
        {company.jobs.map(job => {
          return <div className="card mb-2" key={job._id}>
            <div className="card-content">
              <h1 className="subtitle">{job.title}</h1>
              <h1><strong>Description:</strong> {job.description}</h1>
              <h1><strong>Salary:</strong> {job.salary}</h1>
              <h1><strong>Location:</strong> {job.location}</h1>
              <button className="button is-danger mt-4">Apply Here!</button>
            </div>
          </div>
        })}


      </div>
    </div>
  </div>
}