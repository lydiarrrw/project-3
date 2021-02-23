import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { isCreator } from '../lib/auth'
import parse from 'html-react-parser'
import 'draft-js/dist/Draft.css'
import { Link } from 'react-router-dom'


export default function Job({ match, location, history }) {

  const [jobPost, updateJobPost] = useState({})
  const [companyPost, updateCompanyPost] = useState({})
  const [time, updateTime] = useState('')
  const [user, updateUser] = useState('')
  const [admin, updateAdmin] = useState('')
  const [modal, updateModal] = useState(false)

  const companyID = location.state.companyID
  const jobID = match.params.jobId
  const token = localStorage.getItem('token')



  //! Get the company
  useEffect(() => {
    async function getAJob() {
      try {
        const { data } = await axios.get(`/api/company/${companyID}/job/${jobID}`)
        updateJobPost(data)
        updateUser(data.user.name)
        updateTime(data.createdAt.slice(0, 10))
      } catch (err) {
        console.log(err)
      }
      try {
        const { data } = await axios.get(`/api/company/${companyID}`)
        updateCompanyPost(data)
        updateAdmin(data.user._id)
      } catch (err) {
        console.log(err)
      }
    }
    getAJob()
  }, [])
  //! Delete a job post
  async function handleDelete() {
    await axios.delete(`/api/company/${companyID}/job/${jobID}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    history.push(`/company/${companyID}`)
  }
  //! Upload Document Function
  function onChangeFile(event) {
    // const fileInput = document.querySelector('#file-js-example input[type=file]');
    const fileInput = document.querySelector(`#${event.target.name} input[type=file]`)
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector(`#${event.target.name} .file-name`);
      // fileName.textContent = fileInput.files[0].name;
      fileName.textContent = event.target.value
    }
  }
  //console.log('this is admin', admin)
  if (!admin) {
    return null
  }

  //! To parse posted HTML to show nicely in browser
  const html = parse(jobPost.description)
  //console.log(html)

  return <div className="container">
    <div className="section">
      <h1 className="title is-1">{jobPost.title}</h1>
      <div className="tile is-ancestor">
        <div className="tile">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <div className="media">
                <div className="media-left">
                  <Link
                    to={`/company/${companyID}`}>
                    <figure className="image is-96x96 m-2">
                      <img src={`${companyPost.logo}`} alt="Placeholder image" />
                    </figure>
                  </Link>
                </div>
              </div>
              <div className="media-content">
                <div className="content">
                  <Link
                    to={`/company/${companyID}`}>
                    <h3 className="title is-4">{companyPost.company}</h3>
                  </Link>
                  <a className="subtitle is-5">{companyPost.website}</a>
                  <p className="location"><strong>Location(s):</strong></p>{jobPost.location.map((local, index) => {
                    return <div key={index}>{local}</div>
                  })}
                  <p>
                    <br />
                  Posted on: {time}
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title is-4">Job Description</p>
              <div className="showBullets">{html}</div>

              <br />
              <p> Salary: {jobPost.salary}</p>
              <br />
              <button className="button is-success" onClick={() => updateModal(modal ? false : true)}>Apply</button>
              {isCreator(admin) && <button onClick={handleDelete} className="button is-success">Delete</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={modal ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Apply for {jobPost.title} at {companyPost.company}</p>
          <button className="delete" onClick={() => updateModal(modal ? false : true)} aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Type Here" value={user} />
            </div>
          </div>
          <div>
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" placeholder="Type Here" />
            </div>
          </div>
          <div className="file is-info m-1 is-centered is-info" id="cv" >
            <label className="file-label">
              <input className="file-input" type="file" name="cv" onChange={onChangeFile} />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Upload Your CV Here
                </span>
              </span>
              <span className="file-name">
                No file uploaded
              </span>
            </label>
          </div>
          <div className="file is-info m-1 is-centered is-success" id="cover-letter" >
            <label className="file-label">
              <input className="file-input" type="file" name="cover-letter" onChange={onChangeFile} />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Upload Your Cover Letter Here
                </span>
              </span>
              <span className="file-name">
                No file uploaded
              </span>
            </label>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={() => updateModal(modal ? false : true)}>Submit</button>
          <button className="button" onClick={() => updateModal(modal ? false : true)}>Cancel</button>
        </footer>
      </div>
    </div>


  </div >
}