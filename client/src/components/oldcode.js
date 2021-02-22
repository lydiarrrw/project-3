import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JobForm from './JobPostForm'
// import ReactDOM from 'react-dom'
// import { Editor, EditorState } from 'draft-js'
// import 'draft-js/dist/Draft.css';

// const inputFields = ['name', ]

export default function PostJob({ match }) {

  const companyId = match.params.companyId

  const [company, updatedCompany] = useState({})
  const [formData, updateFormData] = useState({
    company: 'Charity Crunch', //pre populate with user company
    title: '',
    description: '',
    salary: '',
    industry: '', //react select
    location: 'London', //react select
    user: 'Pauline' //pre pop  
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

  console.log(company)
console.log(company.user)
console.log(localStorage.getItem('token'))
const token = localStorage.getItem('token')
const payloadAsString = atob(token.split('.')[1])
const payloadAsObject = JSON.parse(payloadAsString)
console.log(payloadAsString, payloadAsObject)
  console.log(formData)
  
  
  
  function handleChange(event) {
    updateFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    const newFormData = {
      ...formData
      // location: formData.location.map(type => type.value)
    }

    try {
      const { data } = await axios.post(`/api/company/${companyId}/job`,  {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(data._id)
      history.push(`/company/:companyId/job/${data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return <div className="container">
    <div className="columns is-mobile">
      <div className="column is-one-quarter"></div>
      <div className="column is-two-quarters ">
        <h2 className="title is-2">Post a job for {company.company}</h2>
        <h2 className="title is-4">User details:</h2>
        <JobForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          handleTypeChange={(location) => updateFormData({ ...formData, location })}
        />
      </div>
      <div className="column is-one-quarter"></div>
    </div>
  </div>


}