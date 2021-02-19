import React, { useState } from 'react'
import axios from 'axios'
import JobForm from './JobPostForm'
// import ReactDOM from 'react-dom'
// import { Editor, EditorState } from 'draft-js'
// import 'draft-js/dist/Draft.css';

// const inputFields = ['name', ]

export default function PostJob() {


  const [formData, updateFormData] = useState({
    company: '', //pre populate with user company
    title: '',
    description: '',
    salary: '',
    industry: '', //react select
    location: [], //react select
    user: '' //pre pop with user name but can be changed
    //add time stamp

  })
console.log(formData)
  function handleChange(event) {
    updateFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    // const newFormData = {
    //   ...formData,
    //   location: formData.location.map(type => type.value)
    // }

    try {
      const { data } = await axios.post('/api/company/:companyId/job', //newFormData,
       {
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
        <h2 className="title is-2">Post a job</h2>
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