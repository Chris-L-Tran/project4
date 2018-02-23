import React, { Component } from 'react'
import './Characters.css'

import Construction from '../Construction/Construction'

class Characters extends Component {
  render () {
    return (
      <div className='characters-list'>
        <Construction />
      </div>
    )
  }
}

export default Characters
