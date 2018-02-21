import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button, Glyphicon } from 'react-bootstrap'
import logo from './logo.svg'
import './App.css'

import AddItem from './components/AddItem'

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
        <div className = 'nav'>
        <Navbar inverse>
            <Navbar.Header>
              <NavDropdown title={
                <Button>
                  <Glyphicon glyph="align-justify" />
                </Button>
                }
                noCarat>
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
              </NavDropdown>
            </Navbar.Header>

            <Nav pullRight>

            <Link to='/add'>Add an Item</Link>
            <NavItem href='/add'>Add an Item</NavItem>

          </Nav>
        </Navbar>
      </div>

        <Switch>
          <Route exact path='/add'
            render={props => <AddItem {...props} value = ''/>}
          />
        </Switch>
      </div>
    )
  }
}

export default App
