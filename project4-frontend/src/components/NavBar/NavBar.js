import React, { Component } from 'react'

import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'

import { Dropdown } from 'semantic-ui-react'

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
              caratColor='black'>
              <MenuItem href='/'>Home</MenuItem>
              <MenuItem divider />
              <NavDropdown title='Movies' position='left'>
                <MenuItem href='/Movies'>All Movies</MenuItem>
                <MenuItem href='/Reviews'>Reviews</MenuItem>
              </NavDropdown>
              <MenuItem href='/Class'>ClassPicture</MenuItem>
              <MenuItem href='/About'>About</MenuItem>
            </NavDropdown>
          </Navbar.Header>

          <Nav pullRight>

            <Button className = 'btn-add' href='/Add'>Add an Item</Button>
            <Button className = 'btn-login' href='/login' bsStyle='primary'>Login</Button>

          </Nav>
        </Navbar>
      </div>
    )
  }
}
