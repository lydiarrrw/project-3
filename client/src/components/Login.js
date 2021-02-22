import React, { useState } from 'react'
import axios from 'axios'

export default function Login({ history }) {
  const [error, updateError] = useState('')

  const [formData, updateFormData] = useState({
    email: '',
    password: ''
  })

  function handleChange(event) {
    const { name, value } = event.target
    updateFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData)
      if (localStorage) {
        localStorage.setItem('token', data.token)
      }
      history.push('/')
    } catch (err) {
      console.log(err.response.data)
      updateError('Wrong email or password! Try again or register if you don\'t have an account.')
    }
  }

  return <div className="body">
    <section className="container">
      <div className="columns is-multiline">
        <div className="column is-6 is-offset-3 register">
          <div className="column right has-text-centered">
            <h1 className="title is-4">Sign in</h1>
            <p className="description">Stay updated on your professional world</p>
            <form onSubmit={handleSubmit}>
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
              <button className="button is-block is-primary is-fullwidth is-medium">Submit</button>
              <br />
              <p className="error">{ error }</p>
            </form>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <a href="#" className="links">Forgot Password?</a>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <a href="/register" className="links">Create an Account</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
}