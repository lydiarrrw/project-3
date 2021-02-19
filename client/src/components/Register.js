import React, { useState } from 'react'
import axios from 'axios'

export default function Register({ history }) {

  const [formData, updateFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: 'job-seeker'
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
      console.log(err.response.data)
      return 'Email address already used.'
    }
  }


  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={formData.name}
              onChange={handleChange}
              name={'name'}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={formData.email}
              onChange={handleChange}
              name={'email'}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              value={formData.password}
              onChange={handleChange}
              name={'password'}
            />
          </div>
        </div>
        {/* type */}
        <button className="button">Submit</button>
        
        
      </form>
    </div>
  </div>
}