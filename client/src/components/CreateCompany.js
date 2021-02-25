import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getLoggedInUserId } from '../lib/auth'

export default function CreateCompany({ history }) {
  const userId = getLoggedInUserId()
  console.log(userId)

/*   useEffect(() => {
    async function getUserInfo() {
      try {
        const { data } = await axios.get(`/api/company/${companyId}`)
        updatedCompany(data)
      } catch (err) {
        console.log(err)
      }
    }
    getCompanyInfo()
  }, []) */

  const [formData, updateFormData] = useState({
    company: '',
    website: '',
    about: '',
    industry: '',
    logo: '',
    jobs: [],
    user: {
      name: '',
      email: '',
      password: '',
      type: ''
    }, 
    rating: ''
  })

  const token = localStorage.getItem('token')
  console.log(localStorage)



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
          <h1 className="title is-2">Create a company</h1>
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
                  <input
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
              <div className="field">
                <label className="label">User</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="user"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {console.log(formData)}
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
}