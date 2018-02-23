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
import ClassPicture from './pages/ClassPicture/ClassPicture'
import Reviews from './pages/Reviews/Reviews'

class App extends Component {
  state = {
    value: ''
  }

  render () {
    return (
      <div className='App'>

        <NavBar />

        <div className="bg1">
          <img src="http://digitalspyuk.cdnds.net/17/30/1600x800/landscape-1500890190-avengers-infinity-war-poster-resized-1.jpg" />
        </div>

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
          <Route exact path='/Reviews'
            render={props => <Reviews {...props} value ='' />}
          />
          <Route exact path='/Class'
            render={props => <ClassPicture {...props} value =''/>}
          />
        </Switch>

        <div classname='bg2' />
      </div>
    )
  }
}

export default App
