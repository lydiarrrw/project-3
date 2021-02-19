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
    <h1 className="title is-2 is-centered">Companies</h1>
    <div className="columns is-multiline">
      {companies.map(company => {
        return <div className="column is-half" key={company._id}>
          <div className="card">
            <div className="card-image">
              <img src={company.logo} />
            </div>
            <div className="card-header">
              <div className="card-header-title is-2">
                {company.company}
              </div>
            </div>
            <div className="card-content">
              <strong>About: </strong>{company.about}
              {<br></br>}
              <strong>Website: </strong>{company.website}
              {<br></br>}
              <strong>Rating: </strong>{company.rating}
            </div>
            <div className="card-footer">
              <Link to="/company/:companyId" className="card-footer-item">View Company</Link>
              <a href="#" className="card-footer-item">Leave Comment</a>
              <a href="#" className="card-footer-item">View Jobs</a>
            </div>
          </div>
        </div>
      })}</div>

  </section>
}