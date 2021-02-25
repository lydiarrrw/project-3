import React from 'react'
import AutoPlay from '../components/Carousel.js'

export default function Home() {

  return <>
    <section className="hero is-light has-text-centered home-bck">
      <div className="hero-body">
        <div>
          <p className="title is-1" style={{  fontWeight: 800, letterSpacing: -2 }}>Stepladder</p>
          <img src="https://img.icons8.com/color/96/000000/ladder.png" className='grow1' />
          <p className="subtitle" style={{ letterSpacing: -1 }}>Giving You A Rung Up On Your Career</p>
        </div>
      </div>
    </section>
    <AutoPlay></AutoPlay>
  </>
}
