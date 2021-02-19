import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Companies() {
  const [companies, updateCompanies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/api/companies')
      updateCompanies(data)
    }
    fetchData()
  }, [])

  return <section>
    <div className="columns">
      {companies.map(company => {
        return <div className="column is-one-quarter" key={company._id}>
          <div className="card">
            <div className="card-header">
              <div className="card-header-title">{company.company}</div>
            </div>
            <div className="card-content">{company.about}</div>
          </div>
        </div>
      })}</div>

  </section>
}