import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'


export default function Companies() {
  const [companies, updateCompanies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/api/companies')
      updateCompanies(data)
    }
    fetchData()
  }, [])



  return <section className="all-companies">
    <h1 className="title is-2 has-text-danger">Companies</h1>
    <div className="columns is-multiline">
      {companies.map(company => {
        return <div className="column is-one-quarter" key={company._id}>
          <Link to={`/company/${company._id}`}>
            <div className="card grow">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={company.logo} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{company.company}</p>
                    <p className="subtitle is-6">{company.website}</p>
                  </div>

                </div>
                <strong>About: </strong>{company.about.length >= 130
                  ? company.about.slice(0, 130) + '...'
                  : company.about}
                {<br></br>}
                <strong>Rating: </strong>{company.rating}
              </div>
            </div>
          </Link>
        </div>
      })}</div>

  </section>
}