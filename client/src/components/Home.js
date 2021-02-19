import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { shuffle } from 'lodash'


export default function Home() {

  const [companies, updatecompanies] = useState([])
  const [tiles, updateTiles] = useState([])

  useEffect(() => {
    async function getCompanies() {
      const { data } = await axios.get('/api/companies')
      const shuffled = _.shuffle(data)
      const tiles = shuffled.slice(0, 3)
      updatecompanies(tiles)

      console.log(companies[0])
    }
    getCompanies()
  }, [])


  console.log(companies, 'this is companies')



  return <div><section className="hero is-medium is-link has-text-centered">
    <div className="hero-body">

      <p className="title">
        Stepladder
      </p>
      <img src="https://img.icons8.com/color/96/000000/ladder.png" />
      <p className="subtitle">
        Giving You A Rung Up On Your Career
      </p>
    </div>
  </section>
    <div className='columns'>{
      companies.map((company, index) => {
        const job = company.jobs[Math.floor(Math.random() * company.jobs.length)]
        return <div key={index} className='column'>
          <Link to={`/job/${job._id}`} className='card m-3'>
            <div className={index % 2 === 0 ? 'card-content has-background-warning' : 'card-content has-background-success'}>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img src={company.logo} />
                  </figure>
                </div>
                <div className='media-content '>
                  <p className='title is-4'>{company.company}</p>
                  <p className='subtitle is-6'>{job.title}</p>
                  <p className='subtitle is-6'>{job.salary}</p>
                  <p className='subtitle is-6'>{job.location}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      })
    }</div>

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






