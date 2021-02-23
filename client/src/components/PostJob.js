import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JobForm from './JobPostForm'

export default function PostJob({ match, history }) {

  const companyId = match.params.companyId


  const [company, updatedCompany] = useState({})
  const [formData, updateFormData] = useState({
    company: '', //pre populate with user company
    title: '',
    description: '',
    salary: '',
    location: [], //react select
    user: '' //pre pop  
    //add time stamp

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
      location: formData.location.map(type => type.value),
     
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

  return <div className="container">
    <div className="columns is-mobile">
      <div className="column is-one-quarter"></div>
      <div className="column is-two-quarters ">
        <h2 className="title is-4">Post a job for</h2>
        <h2 className=" title is-2">{company.company}</h2>
        <JobForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          updateFormData={updateFormData}
          handleTypeChange={(location) => updateFormData({ ...formData, location })}
        />
      </div>
      <div className="column is-one-quarter"></div>
    </div>
  </div>


}