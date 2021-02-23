import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = ({ history }) => {


  function handleLogout() {
    localStorage.removeItem('token') // ! This logs you out.
    localStorage.removeItem('name') // ! This logs you out.
    history.push('/')
  }

  return <nav className="navbar" style={{ backgroundColor: '#595f6c', height: 55 }} role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/">
        <img style={{ height: 55, width: 55 }} src="https://i.imgur.com/PidpcsN.png" />
      </Link>
    </div>
    <div className="navbar-menu is-active">
      <div className="navbar-start">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/companies" className="button is-danger is-outlined">
              <strong>Companies</strong>
            </Link>
            <Link to='/jobs' className="button is-primary is-outlined">
              <strong>Jobs</strong>
            </Link>
            <Link to='/map' className="button is-primary is-outlined">
              <strong>Map</strong>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <p className='m-1 has-text-white'>{localStorage.getItem('name') ? `Welcome ${localStorage.getItem('name')}!` : 'Welcome!'}</p>
          <div className="buttons">
            {!localStorage.getItem('token') && <Link to="/register" className="button is-info is-outlined">
              <strong>Register</strong>
            </Link>}
            {!localStorage.getItem('token') && <Link to="/login" className="button is-info is-outlined">
              <strong>Login</strong>
            </Link>}
            {localStorage.getItem('token') && <button onClick={handleLogout} className="button is-light">
              Logout
            </button>}
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default withRouter(NavBar)