import React, { Component } from 'react'
import './ClassPicture.css'

class ClassPicture extends Component {
  render () {
    return (
      <div className='class-picture'>
        <div className='lrg-link'>
          <a href='/large'>Click to Zoom</a>
        </div>
        <img src='http://www.syfy.com/sites/syfy/files/styles/2280x1280/public/2018/02/mcu_class_photo_w5.0_small.jpg?itok=yqEen0v3'
        />
      </div>
    )
  }
}

export default ClassPicture
