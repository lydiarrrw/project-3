import React from 'react'
import AutoPlay from '../components/Carousel.js'


export default function Home() {

  return <>
    <section className="hero is-medium has-text-centered home-bck">
      <div className="hero-body"></div>
      <div>
        <p className="title">Stepladder</p>
        <img src="https://img.icons8.com/color/96/000000/ladder.png" className='grow1' />
        <p className="subtitle">Giving You A Rung Up On Your Career</p>
      </div>
    </section>
    <AutoPlay></AutoPlay>
  </>
}
