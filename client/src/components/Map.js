import React, { useEffect, useState } from 'react'
import axios from 'axios'
// ? import components from my library
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
          delete companyData._id; delete companyData.jobs; delete companyData.user; delete companyData.comments
          const location = role.location
          const coordinates = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=9bd385b38ae74b149703221dc2fa505f&q=${location}&pretty=1`)
          const longlat = coordinates.data.results[0].geometry
          const complete = { ...role, ...companyData, longlat }
          jobs.push(complete)
        }
      }
      updateJobs(jobs)
    }
    getCompanies()
  }, [])

  console.log(jobs)

  // ? The library requires some starting state, which I'm defining here
  const [viewPort, updateViewPort] = useState({
    height: '100vh',
    width: '100vw',
    // zoom is how zoomed in you are
    zoom: 1.1,
    // ? Starting lat and long, so that its centered in a good place.
    latitude: 51.515,
    longitude: -0.078
  })



  return <MapGL
    // ? Spread out all my viewport properties into the MapGL component
    // ? as props.
    {...viewPort}
    // ? Event listener for when the viewport changes..
    onViewportChange={(viewPort) => updateViewPort(viewPort)}
    mapboxApiAccessToken={'pk.eyJ1Ijoibmlja2hheWVzIiwiYSI6ImNrYmh2dW56NDA5ZnIyenB2MHJ4MGFnaWYifQ.IHXzZRvdxBtuH9Ro6nLKmQ'}
  >
    {jobs.map((job, i) =>
      <Marker
        key={i}
        latitude={job.longlat.lat + Math.random() * 0.01}
        longitude={job.longlat.lng + Math.random() * 0.01}
      >
        <img width={20} key={i} src={job.logo} />
        <Link to={`/job/${job._id}`}>{job.title}</Link>
      </Marker>
    )}
  </MapGL>
}
