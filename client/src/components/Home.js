import React from 'react'

<<<<<<< HEAD
export default function Home() {
  return <div className="hero">
    <h1> Welcome Home</h1>
  </div>
=======
const pokeImage = 'https://images7.alphacoders.com/592/thumb-1920-592678.jpg'

export default function Home() {
  return <section
    className="hero is-link is-fullheight-with-navbar"
  >
    <div
      className="hero-body has-text-centered"
      style={{
        backgroundImage: `url("${pokeImage}")`,
        backgroundSize: 'cover'
      }}>
      <div className="container has-text-centered">
        <p className="title has-background-warning is-size-1 has-text-black">
          {'Gotta\' Catch em\' all'}
        </p>
      </div>
    </div>
  </section>
>>>>>>> development
}