import React, { Component } from 'react'

import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends Component {
  render () {
    return (
      <div className='nav'>
        <Navbar inverse>
          <Navbar.Header>
            <NavDropdown title={
              <Button>
                <Glyphicon glyph='align-justify' />
              </Button>
              }
              noCarat>
              <MenuItem href='/'>Home</MenuItem>
              <MenuItem>Item 2</MenuItem>
              <MenuItem href='/about'>About</MenuItem>
            </NavDropdown>
          </Navbar.Header>

          <Nav pullRight>

            <Link to='/add'>Add an Item</Link>
            <NavItem href='/add'>Add an Item</NavItem>

          </Nav>
        </Navbar>
      </div>
    )
  }
}
