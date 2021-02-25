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
    const fileInput = document.querySelector(`#${event.target.name} input[type=file]`)
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector(`#${event.target.name} .file-name`);
      fileName.textContent = event.target.value
    }
  }
  if (!admin) {
    return null
  }

  //! To parse posted HTML to show nicely in browser
  const html = parse(jobPost.description)

  // ! updating ratings 
  function rater(companyPost) {
    const newRating = companyPost.ratings.map(item => Number(item.rating))
    const numOfRatings = newRating.length
    if (newRating.length === 0) {
      return console.log('hello')
    } else {
      return ratingCalc(newRating, numOfRatings)
    }
  }

  function ratingCalc(newRating, numOfRatings) {
    const ratingTotal = newRating.reduce((accumulator, currentValue) => accumulator + currentValue)
    const actualRating = ratingTotal / numOfRatings
    return actualRating.toFixed(1)
  }

  return <div className="jobContainer">
    <div className="columns">
      <div className="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet is-multiline">
        <Link to={`/company/${companyPost._id}`}>
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={companyPost.logo} />
              </figure>
            </div>
            <div className="card-content">
              <strong>About: </strong>{companyPost.about}
              {<br></br>}
              <strong>Rating: </strong>{rater(companyPost)}
            </div>
          </div>
        </Link>
      </div>
      <div className="column is-three-quarters-widescreen is-two-thirds-desktop">
        <div className="card mt-6">
          <div className="card-content">
            <h1 className="title is-2"><strong>{jobPost.title}</strong></h1>
            <h1><strong>Description: </strong>{html}</h1>
            <h1><strong>Salary:</strong> {jobPost.salary}</h1>

            <h1><strong>Location: </strong></h1>{jobPost.location.map((local, index) => {
              return <div key={index}>{local}</div>
            })}

            {localStorage.getItem('type') === 'job-seeker' && <button className="button is-success" style={{ marginTop: 20 }} onClick={() => updateModal(modal ? false : true)}>Apply Here!</button>}
            {(localStorage.getItem('mod') === 'true' || isCreator(admin)) && <button onClick={handleDelete} className="button is-danger" style={{ margin: 20 }}>Delete Job Post</button>}
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
                    <input className="input" type="text" placeholder="Type Here" />
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
        </div>
      </div>
    </div>
  </div>
}