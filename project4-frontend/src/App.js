import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button, Glyphicon } from 'react-bootstrap'
import logo from './logo.svg'
import './App.css'

import AddItem from './components/AddItem'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Movies from './pages/Movies/Movies'

class App extends Component {
  state = {
    value: ''
  }

  render () {
    return (
      <div className='App'>

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
          <Route exact path='/Movies'
            render={props => <Movies {...props} value =''/>}
          />
        </Switch>
      </div>
    )
  }
}

export default App
