import React, { Component } from 'react'
import './Construction.css'

export default class Construction extends Component {
  render () {
    return (
      <div className='con-err'>
        <h1>You have reached a page that is not yet complete. Please come back later</h1>
        <img className='con-img' src='http://www.jcscomicsnmore.com/wp-content/uploads/2017/12/construction.jpg'/>
      </div>
    )
  }
}
