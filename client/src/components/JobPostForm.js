import React from 'react'
import Select from 'react-select'
import countryData from '../data/countryData'

export default function JobForm({ formData, handleSubmit, handleChange, handleTypeChange }) {

  return <div className="container">

    <form onSubmit={handleSubmit}>

      <div className="field">
        <label className="label">Company Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="company"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Industry</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="industry"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Job Title</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="title"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea className="textarea"
            placeholder="Type job description here"
            // className="input"
            type="text"
            name="description"
            onChange={handleChange}>
          </textarea>

        </div>
      </div>

      <div className="field">
        <label className="label">Salary</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="salary"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Location</label>
        <div className="control">
          <Select
            defaultValue={[]}
            options={countryData}
            className="basic-multi-select"
            classNamePrefix="select"
            name="location"
            onChange={handleTypeChange}
            value={formData.types}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">User</label>
        <div className="control">
         <p>Name:{name} Id:</p>
        </div>
      </div>



      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
    </form>
  </div>


}
