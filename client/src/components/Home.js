import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { shuffle } from 'lodash'



export default function Home() {

  const [companies, updatecompanies] = useState([])
  const [tiles, updateTiles] = useState([{ title: '', location: '', _id: '' }])

  useEffect(() => {
    async function getCompanies() {
      const { data } = await axios.get('/api/companies')
      updatecompanies(data)
      const companiesArr = []
      for (let index = 0; index < data.length; index++) {
        // console.log(companies[index].jobs)
        companiesArr.push(...data[index].jobs)
      }
      const shuffled = _.shuffle(companiesArr)
      const three = [shuffled[0], shuffled[1], shuffled[2]]
      updateTiles(three)
    }
    getCompanies()
  }, [])


  console.log(companies, tiles)



  return <div><section className="hero is-medium is-link has-text-centered">
    <div className="hero-body">

      <p className="title">
        Stepladder
      </p>
      <img src="https://img.icons8.com/color/96/000000/ladder.png" />
      <p className="subtitle">
        Giving You A Rung Up On Your Career
      </p>
    </div>
  </section>
    <div className='columns'>
      {tiles.map((tile, index) => {
        return <div key={index} className='column is-one-third'><Link to="/" className="tile is-ancestor">
          <div className="tile m-3 ">
            <article className={index % 2 === 0 ? "tile is-child notification is-primary" : "tile is-child notification is-warning"}>
              <p className="title">{tile.title}</p>
              <p className="subtitle">{tile.location}</p>
              <p className="subtitle">{tile.salary}</p>
            </article>
          </div>
        </Link>
        </div>
      })}</div>

  </div>
}

{/* // description: "Your clear purpose is to focus on filling the top of the funnel with quality traffic that converts into registrations and you will work closely with the Commercial Team to ensure we hit our registration, revenue and retention goals."
// location: "Edinburgh"
// salary: "£60,000"
// title: "VP of Marketing"
// updatedAt: "2021-02-18T16:37:30.601Z"
// user: "602e97c742a04f079b52d42b"
// _id: "602e97ca42a04f079b52d446" */}

