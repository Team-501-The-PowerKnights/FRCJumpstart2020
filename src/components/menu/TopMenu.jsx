import React from 'react';

import Headroom from 'react-headroom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import MenuItem from './MenuItem';
import SocialMenu from '../social_menu/SocialMenu';

import logo from '../../images/logo.png';

export default function TopMenu() {
  return (
    <Headroom>
      <Navbar style={{
        backgroundColor: `#2F3292`
      }}
        expand='lg'>

        <Navbar.Brand href="/"><img
          src={logo}
          alt={`FRC Jumpstart`}
          height={`100`}
          style={{ display: `inline` }}
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <MenuItem link='#about' openInNewTab='false' hoverColor='#FFDE17'>
              About
      </MenuItem>
            <MenuItem link='#speakers' openInNewTab='false' hoverColor='#FFDE17'>
              Speakers
      </MenuItem>
            <MenuItem link='#schedule' openInNewTab='false' hoverColor='#FFDE17'>
              Schedule
      </MenuItem>
            <MenuItem link='#subscribe' openInNewTab='false' hoverColor='#FFDE17'>
              Subscribe
      </MenuItem>
          </Nav>
          <SocialMenu hoverColor='#FFDE17' />
        </Navbar.Collapse>
      </Navbar>
    </Headroom>
  );
}
