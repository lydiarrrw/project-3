import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Footer = () => {
  return <footer>
  <div className="column is-8 is-offset-2">
    <br />
    <nav className="level">
      <div className="level-left">
        <div className="level-item">
          <span className="icon">
            <i className="fab fa-twitter"></i>
          </span> &emsp;
          <span className="icon">
            <i className="fab fa-facebook"></i>
          </span> &emsp;
          <span className="icon">
            <i className="fab fa-instagram"></i>
          </span> &emsp;
          <span className="icon">
            <i className="fab fa-github"></i>
          </span> &emsp;
          <span className="icon">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div clclassNameass="level-right">
        <small className="level-item">
          &copy; Stepladder. All Rights Reserved.
        </small>
      </div>
    </nav>
  </div>
</footer>




}

export default withRouter(Footer)