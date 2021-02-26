import React, { useEffect, useState } from 'react'
import axios from 'axios'

import MapGL, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'

export default function Map() {

  const [jobs, updateJobs] = useState([])

  //!Fetching from the API

  useEffect(() => {
    async function getCompanies() {
      const { data } = await axios.get('/api/companies')
      const companies = data
      const jobs = []
      for (let index = 0; index < companies.length; index++) {
        for (let job = 0; job < companies[index].jobs.length; job++) {
          //!Adding company information to job fields
          const role = companies[index].jobs[job]
          const companyData = { ...companies[index] }
          role.companyID = companyData._id
          delete companyData._id; delete companyData.jobs; delete companyData.user; delete companyData.comments
          const location = role.location
          const coordinates = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.apikey1}&q=${location}&pretty=1`)
          const longlat = coordinates.data.results[0].geometry
          const complete = { ...role, ...companyData, longlat }
          jobs.push(complete)
        }
      }
      updateJobs(jobs)
    }
    getCompanies()
  }, [])


  const [viewPort, updateViewPort] = useState({
    height: '100vh',
    width: '100vw',
    zoom: 1.1,
    latitude: 51.515,
    longitude: -0.078
  })


  return <MapGL
    {...viewPort}
    onViewportChange={(viewPort) => updateViewPort(viewPort)}
    mapboxApiAccessToken={`${process.env.apikey}`}
    mapStyle='mapbox://styles/clem-code/cklgfko3y7o5z17nsey5dye0l'
  >
    {jobs.map((job, i) =>
      <Marker
        key={i}
        latitude={job.longlat.lat + Math.random() * 0.01}
        longitude={job.longlat.lng + Math.random() * 0.01}
      >
        <img width={20} key={i} src={job.logo} />
        <Link to={{ pathname: `/job/${job._id}`, state: { companyID: job.companyID } }}>{job.title}</Link>
      </Marker>
    )}
  </MapGL>
}
