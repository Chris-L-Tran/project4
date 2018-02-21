import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button, Glyphicon } from 'react-bootstrap'
import logo from './logo.svg'
import './App.css'

import AddItem from './components/AddItem'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'

class App extends Component {
  state = {
    value: ''
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <NavBar />

        <Switch>
          <Route exact path ='/'
            render={props => <Home {...props} value =''/> }
          />
          <Route exact path='/add'
            render={props => <AddItem {...props} value = ''/>}
          />
          <Route exact path='/About'
            render={props => <About {...props} value =''/>}
          />
        </Switch>
      </div>
    )
  }
}

export default App
