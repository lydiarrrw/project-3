import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = ({ history }) => {

  const [menu, updateMenu] = useState(false)


  function handleLogout() {
    localStorage.removeItem('token') // ! This logs you out.
    localStorage.removeItem('name') // ! This logs you out.
    history.push('/')
  }

  return <nav className="navbar is-light" style={{ height: 55 }} role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/">
        <img style={{ height: 55, width: 55 }} src="https://i.imgur.com/PidpcsN.png" />
      </Link>
      <a onClick={() => updateMenu(!menu)} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className={`navbar-menu ${menu ? "is-active" : ''} is-spaced px-3`}>
      <div className="navbar-start">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/companies" className="button is-danger is-outlined">
              <strong>Companies</strong>
            </Link>
            <Link to='/jobs' className="button is-danger is-outlined">
              <strong>Jobs</strong>
            </Link>
            <Link to='/map' className="button is-danger is-outlined">
              <strong>Map</strong>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <p className='mr-5 has-text-dark'>{localStorage.getItem('name') ? `Welcome ${localStorage.getItem('name')}!` : 'Welcome!'}</p>
          <div className="buttons">
            {!localStorage.getItem('token') && <Link to="/register" className="button is-primary is-outlined">
              <strong>Register</strong>
            </Link>}
            {!localStorage.getItem('token') && <Link to="/login" className="button is-primary is-outlined">
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