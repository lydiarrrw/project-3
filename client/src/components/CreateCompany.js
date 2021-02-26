import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getLoggedInUserId } from '../lib/auth'

export default function CreateCompany({ history }) {
  const [loggedUser, updateLoggedUser] = useState({})
  const userId = getLoggedInUserId()

  useEffect(() => {
    async function getLoggedUser() {
      try {
        const { data } = await axios.get(`/api/login/${userId}`)
        updateLoggedUser(data)
        console.log('data', data)
      } catch (err) {
        console.log(err)
      }
    }
    getLoggedUser()
  }, [])

  if (!loggedUser) {
    return null
  }

  const [formData, updateFormData] = useState({
    company: '',
    website: '',
    about: '',
    industry: '',
    logo: '',
    jobs: [],
    rating: ''
  })

  const token = localStorage.getItem('token')

  function handleChange(event) {
    const { name, value } = event.target
    updateFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const { data } = await axios.post('/api/company/create', formData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(data)
      history.push('/companies')
    } catch (err) {
      console.log(err)
    }
  }

  return <div className="body level">
    <div className="container level-item">
      <div className="column is-half ">
        <section className="level">
          <h1 className="title is-2 has-text-danger">Create a company</h1>
        </section>
        <div className="level">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Company</label>
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
                <label className="label">Website</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="website"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">About</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    type="text"
                    name="about"
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
                <label className="label">Logo</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="logo"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
}