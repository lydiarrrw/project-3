import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { shuffle } from 'lodash'

export default function Jobs() {
  const [search, updateSearch] = useState([])
  const [jobs, updateJobs] = useState([])

  //!Fetching from the API

  useEffect(() => {
    async function getCompanies() {
      const { data } = await axios.get('/api/companies')
      const companies = data
      const jobs = []
      for (let index = 0; index < companies.length; index++) {
        for (let job = 0; job < companies[index].jobs.length; job++) {
          //!Adding company information to job fields
          const role = companies[index].jobs[job]
          const companyData = { ...companies[index] }
          delete companyData._id; delete companyData.jobs; delete companyData.user; delete companyData.comments
          const complete = { ...role, ...companyData }
          jobs.push(complete)
        }
      }
      const shuffled = _.shuffle(jobs)
      updateJobs(shuffled)
    }
    getCompanies()
  }, [])
  console.log('this is jobs', jobs)
  //!Filtering to enable search function

  function filterJobs() {
    return jobs.filter(job => {
      if (search.length === 0) { return job }
      else {
        return job.title.toLowerCase().includes(search.toLowerCase()) || job.location.toLowerCase().includes(search.toLowerCase()) || job.industry.toString().toLowerCase().includes(search.toLowerCase())
      }
    })
  }

  return <div>
    <div className='columns m-3 is-centered' >
      <div className='column is-half'>
        <input className="input is-rounded is-medium is-focused is-centered" onChange={(event) => updateSearch(event.target.value)} type="text" placeholder="Search..."></input>
      </div>
    </div>
    <div className='container'>
      <div className='columns is-multiline'>{
        filterJobs().map((job, index) => {
          const sector = job.industry.toString()
          const upperSector = sector.slice(0, 1).toUpperCase() + sector.slice(1)
          return <div key={index} className='column is-one-third'>
            <Link to={`/job/${job._id}`} className='card m-3'>
              <div className={index % 2 === 0 ? 'card-content has-background-info grow' : 'card-content has-background-primary grow'}>
                <div className='media'>
                  <div className='media-left'>
                    <figure className='image is-48x48'>
                      <img src={job.logo} />
                    </figure>
                  </div>
                  <div className='media-content '>
                    <p className='title is-4'>{job.title}</p>
                    <ul>
                      <li className='subtitle is-6'><b>Company:</b> {job.company}</li>
                      <li className='subtitle is-6'><b>Salary:</b> {job.salary}</li>
                      <li className='subtitle is-6'><b>Location:</b> {job.location}</li>
                      <li className='subtitle is-6'><b>Sector:</b> {upperSector}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        })
      }</div>
    </div>
  </div>
}




{/* // description: "Your clear purpose is to focus on filling the top of the funnel with quality traffic that converts into registrations and you will work closely with the Commercial Team to ensure we hit our registration, revenue and retention goals."
// location: "Edinburgh"
// salary: "£60,000"
// title: "VP of Marketing"
// updatedAt: "2021-02-18T16:37:30.601Z"
// user: "602e97c742a04f079b52d42b"
// _id: "602e97ca42a04f079b52d446" */}

// about: "Learn a language with thousands of video clips of real native speakers, fun and effective games to practice your skills. Start learning on web or on our apps!"
// comments: []
// company: "Language Pirate"
// industry: ["education"]
// jobs: (3)[{ … }, { … }, { … }]
// logo: "https://i.imgur.com/ZFN0A3j.jpg"
// rating: 4.2
// user: { name: "Jay Vasudha", type: "company-admin", _id: "602fdb8285457d4db755c7dc" }
// website: "www.languagepirate.com"
// __v: 0
// _id: "602fdb8585457d4db755c7fa"