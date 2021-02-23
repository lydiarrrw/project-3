import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Login({ history }) {
  const [error, updateError] = useState('')
  const [userList, updateUserList] = useState([])
  const [formData, updateFormData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    async function getUsers() {
      const { data } = await axios.get('/api/register')
      updateUserList(data)
    }
    getUsers()
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    updateFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData)
      console.log(data)

      if (localStorage) {
        localStorage.setItem('token', data.token)
        const token = data.token
        const payloadAsString = atob(token.split('.')[1])
        const payloadAsObject = JSON.parse(payloadAsString)
        const userID = payloadAsObject.userId
        const filtered = userList.filter((user) => {
          if (user._id === userID) {
            return user
          }
        })
        localStorage.setItem('name', filtered[0].name)
      }
      history.push('/')
    } catch (err) {
      console.log(err.response.data)
      updateError('Wrong email or password! Try again or register if you don\'t have an account.')
    }
  }

  return <div className="section bck-img-login">
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="container">
          <form onSubmit={handleSubmit}>
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
            <button className="button">Submit</button>
            <p className="content">{error}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
}