import React, { Component } from 'react'
import './AddItem.css'

class AddItem extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ' '}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }

  handleSubmit (e) {
    alert(this.state.value)
    e.preventDefault()
  }

  render () {
    return (
      <div className='add-item'>
        <h2>This is the add Item page. </h2>
        <a href='/'>Home</a>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <label>
              Add Item:
              <input type='text' value={this.state.value} onChange={this.handleChange} className='form-control' />
            </label><br />
            <input type='submit' value='Submit' className='btn btn-primary' />
          </form>
        </div>
      </div>
    )
  }
}

export default AddItem
