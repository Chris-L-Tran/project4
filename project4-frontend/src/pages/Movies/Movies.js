import React, { Component } from 'react'
import './Movies.css'

import axios from 'axios'

class Movies extends Component {
  componentDidMount = () => {
    let path = this.props.location.pathname

    this.setState({
      path: path
    })

    state = {
      movies: []
    }

    axios
      .get('http://localhost:9000')
      .then((res.err) => {
        this.setState({
          movies: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  
  render () {
    return (
      <div className='Movies'>
        Hello this is the movies page
      </div>
    )
  }
}

export default Movies
