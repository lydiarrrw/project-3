import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Job({ match }) {
  const jobId = match.params.jobId
  console.log(jobId)
  const companyId = match.params.companyId
  console.log(companyId)
  const [jobPost, updateJobPost] = useState({})

  useEffect(() => {
    async function getAJob() {
      try {
        const { data } = await axios.get(`/api/company/60311b1457093b1652d3557c/job/60311b1457093b1652d3557d`)
        // const { data } = await axios.get(`/api/company/${companyId}/job/${jobId}`)
        updateJobPost(data)
      } catch (err) {
        console.log(err)
      }
    }
    getAJob()
  }, [])

  console.log(jobPost)
  return <div className="container">
    <div className="section">
      <div>
        <h1 className="title is-1">{jobPost.title}, company name</h1>
        <h2 className="title is-4">Location: {jobPost.location}</h2>
        <p className="title is-5">Posted on: {jobPost.createdAt}</p>
      </div>


      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title is-4">Add company logo</p>
            <p>Contact details</p>
          </div>
          <div className="tile is-child box">
            <p className="title is-4">Company reviews</p>
            <p>Reviews</p>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title is-4">Job description</p>
            <p> Salary: {jobPost.salary}</p>
            <p>{jobPost.description}</p>
            <button className="button is-success">Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
}