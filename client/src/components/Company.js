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

  return <div className="companyContainer">
    <h1 className="title is-2 has-text-danger">{company.company}</h1>
    <div className="columns">
      <div className="column is-half">
        <div className="card">
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
            <strong>About: </strong>{company.about}
            {<br></br>}
            <strong>Rating: </strong>{company.rating}
          </div>
        </div>
      </div>
      <div className="column is-half">
        <h1 className="title">Jobs posted:</h1>

      </div>
    </div>
  </div>
}