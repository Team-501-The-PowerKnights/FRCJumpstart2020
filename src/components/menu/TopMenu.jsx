import React from 'react';

import Headroom from 'react-headroom';

import Navbar from 'react-bootstrap/Navbar';

import MenuItem from './MenuItem';
import SocialMenu from '../social_menu/SocialMenu';

import logo from '../../images/logo.webp';

export default function TopMenu() {
  return (
    <Headroom
      style={{
        height: `101`,
        borderBottomColor: `#FFDE17`,
        borderBottomWidth: `1%`,
        borderBottomStyle: `solid`,
      }}>
      <Navbar
        style={{
          backgroundColor: `#2F3292`,
        }}
        expand='lg'
        variant='dark'>
        <Navbar.Brand href='/'>
          <img src={logo} alt={`FRC Jumpstart`} height={`100`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          className='justify-content-around'
          id='basic-navbar-nav'>
          <Navbar.Text>
            <MenuItem link='#about' openInNewTab={false} hoverColor='#FFDE17'>
              About
            </MenuItem>
          </Navbar.Text>
          <Navbar.Text>
            <MenuItem
              link='#speakers'
              openInNewTab={false}
              hoverColor='#FFDE17'>
              Speakers
            </MenuItem>
          </Navbar.Text>
          <Navbar.Text>
            <MenuItem
              link='#schedule'
              openInNewTab={false}
              hoverColor='#FFDE17'>
              Schedule
            </MenuItem>
          </Navbar.Text>
          <Navbar.Text>
            <MenuItem
              link='#subscribe'
              openInNewTab={false}
              hoverColor='#FFDE17'>
              Subscribe
            </MenuItem>
          </Navbar.Text>
          <SocialMenu hoverColor='#FFDE17' />
        </Navbar.Collapse>
      </Navbar>
    </Headroom>
  );
}
