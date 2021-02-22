import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'




const NavBar = () => {
  return <nav className="navbar" style={{ backgroundColor: '#172d44', height: 55 }} role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/">
        <img style={{ height: 55, width: 55 }} src="https://i.imgur.com/PidpcsN.png" />
      </Link>
    </div>
    <div className="navbar-menu is-active">
      <div className="navbar-start">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/" className="button is-white is-outlined">
              <strong>Home</strong>
            </Link>
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
          <div className="buttons">
            <Link to="/register" className="button is-info is-outlined">
              <strong>Register</strong>
            </Link>
            <Link to="/login" className="button is-info is-outlined">
              <strong>Login</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default withRouter(NavBar)