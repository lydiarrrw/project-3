import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JobForm from './JobPostForm'

export default function PostJob({ match, history }) {

  const companyId = match.params.companyId


  const [company, updatedCompany] = useState({})
  const [formData, updateFormData] = useState({
    company: '',
    title: '',
    description: '',
    salary: '',
    location: [],
    user: ''


  })

  useEffect(() => {
    async function getCompanyInfo() {
      try {
        const { data } = await axios.get(`/api/company/${companyId}`)
        updatedCompany(data)
      } catch (err) {
        console.log(err)
      }
    }
    getCompanyInfo()
  }, [])


  const token = localStorage.getItem('token')
  const payloadAsString = atob(token.split('.')[1])
  const payloadAsObject = JSON.parse(payloadAsString)


  function handleChange(event) {
    updateFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()


    const newFormData = {
      ...formData,
      location: formData.location.map(type => type.value)

    }

    try {
      const { data } = await axios.post(`/api/company/${companyId}/job`, newFormData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(data)
      history.push(`/company/${companyId}`)
    } catch (err) {
      console.log(err)
    }
  }

  return <div className="body level">
    <div className="container level-item">
      <div className="column is-half ">
        <section className="level">
          <h1 className="title is-2 has-text-danger">Post a job for {company.company}</h1>
        </section>
        <div className="level">
          <JobForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
            updateFormData={updateFormData}
            handleTypeChange={(location) => updateFormData({ ...formData, location })}
          />
        </div>
      </div>
    </div>
  </div>
}