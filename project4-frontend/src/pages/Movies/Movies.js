import React, { Component } from 'react'
import './Movies.css'

import axios from 'axios'

class Movies extends Component {
  constructor (props) {
    super(props)
    this.state = {
      testText: 'Testing',
      movies: []
    }
  }

  componentDidMount () {
    axios
      .get('http://localhost:9000/')
      .catch(err => console.log(err))
      .then((res) => {
        console.log(res.data)
        this.setState({
          movies: res.data
        })
        console.log(this.state.movies)
      })
  }

  render () {
    return (
      <div className='all-movies'>
        <div className='movies-list'>
          {this.state.movies.map((item, idx) => {
            return <div className='movie'>
              <div className='movie-title'>
                <a src='/movies/{item.title}'>{item.title}</a>
              </div>
              <div className='movie-img'>
                <img src={item.img_url} />
              </div>
              <p>{item.year}</p>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default Movies
