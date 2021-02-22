import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { shuffle } from 'lodash'


export default function Home() {

  const [companies, updatecompanies] = useState([])

  useEffect(() => {
    async function getCompanies() {
      const { data } = await axios.get('/api/companies')
      const shuffled = _.shuffle(data)
      const tiles = shuffled.slice(0, 3)
      updatecompanies(tiles)

    }
    getCompanies()
  }, [])


  console.log(companies, 'this is companies')



  return <div><section className="hero is-medium is-link has-text-centered">
    <div className="hero-body">

      <p className="title">
        Stepladder
      </p>
      <img src="https://img.icons8.com/color/96/000000/ladder.png" className='grow1' />
      <p className="subtitle">
        Giving You A Rung Up On Your Career
      </p>
    </div>
  </section>
    <div className='container'>
      <div className='columns'>{
        companies.map((company, index) => {
          const job = company.jobs[Math.floor(Math.random() * company.jobs.length)]
          return <div key={index} className='column'>
            <Link to={`/job/${job._id}`} className='card m-3'>
              <div className={index % 2 === 0 ? 'card-content has-background-warning homepage grow' : 'card-content has-background-success homepage grow'}>
                <div className='media'>
                  <div className='media-left'>
                    <figure className='image is-48x48'>
                      <img src={company.logo} />
                    </figure>
                  </div>
                  <div className='media-content '>
                    <p className='title is-4'><b>Company: </b>{company.company}</p>
                    <p className='subtitle is-6'><b>Role: </b>{job.title}</p>
                    <p className='subtitle is-6'><b>Salary: </b>{job.salary}</p>
                    <p className='subtitle is-6'><b>Location: </b>{job.location}</p>
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








