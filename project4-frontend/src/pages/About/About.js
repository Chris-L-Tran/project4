import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      <div className='about-page'>
        <h1>Hello and welcome to the about page.</h1>
        <div>Information Courtesy of:</div>
        <a target='_blank' href='https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe'>Wiki</a>
      </div>
    )
  }
}

export default About
