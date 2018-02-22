import React, { Component } from 'react'

import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends Component {
  render () {
    return (
      <div className='nav-bar'>
        <Navbar inverse>
          <Navbar.Header>
            <NavDropdown title={
              <Button>
                <Glyphicon glyph='align-justify' />
              </Button>
              }
              noCarat>
              <MenuItem href='/'>Home</MenuItem>
              <MenuItem href='/Movies'>Movies</MenuItem>
              <MenuItem href='/Reviews'>Reviews</MenuItem>
              <MenuItem href='/Class'>ClassPicture</MenuItem>
              <MenuItem href='/About'>About</MenuItem>
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
