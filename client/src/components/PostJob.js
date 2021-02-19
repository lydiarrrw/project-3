import React from 'react'


// const inputFields = ['name', ]

export default function PostJob({ handleSubmit}) {
  return <div className="hero">
    <h1> Post a job listing</h1>
   {/* // form */}
   <form onSubmit={handleSubmit}>
  <input 
  className></input>
   </form>
    <p></p>
    <p>text of job description react component</p>
    <p>contact details</p>
    <button>submit</button>
  </div>
}