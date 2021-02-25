import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Companies from './Companies'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  }

  const [companies, updateCompanies] = useState([])
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/api/companies')
      updateCompanies(data)
    }
    fetchData()
  }, [])

  return <div className="carousel">
    <Slider {...settings}>
      {companies.map(company => {
        return <Link to={`/company/${company._id}`} key={company._id}>
          <div>
            <img src={company.logo}></img>
          </div>
        </Link>
      })}
    </Slider>
  </div>
}
