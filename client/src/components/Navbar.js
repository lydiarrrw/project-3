import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = () => {
  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-menu is-active">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/" className="button is-dark">
              <strong>Home</strong>
            </Link>
            <Link to="/companies" className="button is-danger">
              <strong>Companies</strong>
            </Link>
            <Link to='/jobs' className="button is-primary">
              <strong>Jobs</strong>
            </Link>
            <Link to="/register" className="button is-info">
              <strong>Register</strong>
            </Link>
            <Link to="/login" className="button is-info">
              <strong>Login</strong>
            </Link>

          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default withRouter(NavBar)