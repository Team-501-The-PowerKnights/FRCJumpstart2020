import React from 'react';
import Headroom from 'react-headroom';
import { makeStyles } from '@material-ui/core/styles';

import MenuItem from './MenuItem';
import SocialMenu from "../social_menu/SocialMenu";

const useStyles = makeStyles({
  menu: {
    listStyleType: `none`,
    margin: `0`,
    padding: `0`,
    flexGrow: 20,
    textAlign: `center`,
    display: `flex`,
    justifyContent: `space-around`,
  },
});

export default function TopMenu() {
  const classes = useStyles();
  return (
    <Headroom>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          alignItems: `center`,
          backgroundColor: `#2F3292`,
        }}>
        <a href='/' style={{ margin: `0`, padding: `0`, height: 100 }}>
          <img
            src={`images/top_logo.png`}
            alt={`FRC Jumpstart`}
            height={`100`}
            style={{ flexGrow: 2 }}
          />
        </a>
        <div style={{ flexGrow: 20 }}></div>
        <ul className={classes.menu}>
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
        </ul>
        <div style={{ flexGrow: 5 }}>
          <SocialMenu hoverColor='#FFDE17' />
        </div>
        <div style={{ flexGrow: 2 }}></div>
      </div>
    </Headroom>
  );
}
