import React, { useState } from 'react'
import axios from 'axios'
import userTypes from '../data/userTypes'
import Select from 'react-select'

export default function Register({ history }) {
  const [error, updateError] = useState('')

  const [formData, updateFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: ''
  })

  function handleChange(event) {
    const { name, value } = event.target
    updateFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const { data } = await axios.post('/api/register', formData)
      console.log(data)
      history.push('/login')
    } catch (err) {
      console.log(err.response.data._message)
      if (formData.name === '' || formData.email === '' || formData.password === '' || formData.type === '') {
        updateError('All fields are required!')
      } else {
        updateError('User with this email account is already registered!')
      }
    }
  }


  return <div className="body">
    <section className="container">
      <div className="columns is-multiline">
        <div className="column is-8 is-offset-2 register">
          <div className="columns p-5">
            <div className="column left">
              <h1 className="title is-1">Stepladder</h1>
              <h2 className="subtitle colored is-4">Find your future job today.</h2>
              <p>Search millions of jobs and get the inside scoop on companies with employee reviews, personalised salary tools, and more.</p>
              <br />
              <p>Hiring? Post a job for free.</p>
            </div>
            <div className="column right has-text-centered">
              <h1 className="title is-4">Sign up</h1>
              <p className="description">Welcome to your professional community</p>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <div className="control">
                    <input className="input is-medium" type="text" placeholder="Name" value={formData.name} onChange={handleChange} name={'name'}/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-medium" type="email" placeholder="Email" value={formData.email} onChange={handleChange} name={'email'}/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-medium" type="password" placeholder="Password" value={formData.password} onChange={handleChange} name={'password'}/>
                  </div>
                </div>
                <Select
                  className="userType"
                  classNamePrefix="select"
                  defaultValue=''
                  type="type"
                  options={userTypes}
                  onChange={(type) => { 
                    type = type.value
                    updateFormData({ ...formData, type })
                  }}
                  name={'type'}
                  value={formData.type.value}
                />
                  <button className="button is-block is-primary is-fullwidth is-medium">Submit</button>
                <br />
                <p className="error">{ error }</p>
                <small><em>By continuing, you agree to our <a href="#" className="links">Terms of Use</a> and acknowledge our <a href="#" className="links">Privacy Policy</a>.</em></small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
}