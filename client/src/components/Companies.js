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
        return <div className="column" key={company._id}>
          {company.company}
          {company.website}
        </div>
      })}</div>

  </section>

}