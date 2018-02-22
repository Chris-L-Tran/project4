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
      <div className='movies'>
        <div className='movies-list'>
          {this.state.movies.map((item, idx) => {
            return <div className='movie'>
              <h1>{item.title}</h1>
              <img src={item.img_url}></img>
              <p>{item.year}</p>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default Movies
