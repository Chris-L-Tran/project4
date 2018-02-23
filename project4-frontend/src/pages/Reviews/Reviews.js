import React, { Component } from 'react'
import './Reviews.css'

import axios from 'axios'

class Reviews extends Component {
  constructor (props) {
    super(props)
    this.state ={
      testText: 'Testing',
      movies:[]
    }
  }

  componentDidMount () {
    axios
    .get('http://localhost:9000/')
    .catch(err => console.log(err))
    .then((res) => {
      this.setState({
        movies: res.data
      })
      console.log(this.state.movies[0].imdb)
    })
  }

  render () {
    return (
      <div className='all-reviews'>
        <div className='reviews-list'>
          {this.state.movies.map((item, idx) => {
            return <div className='review'>
              <h3>{item.title}</h3>
              <a href= {item.imdb} target="_blank">Imdb</a><br />
              <a href={item.meta}>MetaCritic</a>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default Reviews
