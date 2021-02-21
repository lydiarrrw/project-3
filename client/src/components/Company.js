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
    <div className="companyCard">
      <img src={company.logo} />
      <h1>About: {company.about}</h1>
      <h1>Rating: {company.rating}</h1>
    </div>
  </div>

}