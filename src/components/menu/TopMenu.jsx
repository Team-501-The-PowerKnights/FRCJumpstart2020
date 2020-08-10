import React from 'react';

import Headroom from 'react-headroom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import MenuItem from './MenuItem';
import SocialMenu from '../social_menu/SocialMenu';

import logo from '../../images/logo.png';

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
          id='basic-navbar-nav'
          style={{
            display: `inline-flex`,
            flexDirection: `row`,
            alignContent: `space-around`,
            alignItems: `center`,
          }}>
          <Nav
            className='mr-auto'
            style={{
              display: `inline-flex`,
              flexDirection: `row`,
              alignContent: `space-around`,
              alignItems: `center`,
              flexGrow: 2,
              paddingLeft: `1%`,
            }}>
            <div style={{ flexGrow: 1 }}>
              <MenuItem link='#about' openInNewTab={false} hoverColor='#FFDE17'>
                About
              </MenuItem>
            </div>
            <div style={{ flexGrow: 1 }}>
              <MenuItem
                link='#speakers'
                openInNewTab={false}
                hoverColor='#FFDE17'>
                Speakers
              </MenuItem>
            </div>
            <div style={{ flexGrow: 1 }}>
              <MenuItem
                link='#schedule'
                openInNewTab={false}
                hoverColor='#FFDE17'>
                Schedule
              </MenuItem>
            </div>
            <div style={{ flexGrow: 1 }}>
              <MenuItem
                link='#subscribe'
                openInNewTab={false}
                hoverColor='#FFDE17'>
                Subscribe
              </MenuItem>
            </div>
          </Nav>
          <div style={{ flexGrow: 6 }}></div>
          <div style={{ flexGrow: 1 }}>
            <SocialMenu hoverColor='#FFDE17' />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Headroom>
  );
}
