import React, { Component } from 'react'
import './Large.css'

class Large extends Component {
  render () {
    return (
      <div className='large-pic'>
        <iframe src='http://www.syfy.com/sites/syfy/files/styles/2280x1280/public/2018/02/mcu_class_photo_w5.0_small.jpg?itok=yqEen0v3'
          height='775'
          width='100%'
        />
      </div>

    )
  }
}

export default Large
