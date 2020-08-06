import React from 'react';
import Headroom from 'react-headroom';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import MenuItem from './MenuItem';

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
    socialMenu: {
        listStyleType: `none`,
        margin: `0`,
        padding: `0`,
        flexGrow: 5,
        textAlign: `center`,
        display: `flex`,
        justifyContent: `space-around`,
    },
    menuItem: {
        display: `inline`,
    },
    link: {
        textDecoration: `none`,
        color: `#FFFFFF`,
        fontFamily: `Nunito Sans`,
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
                        style={{ flexGrow: 1 }}
                    />
                </a>
                <div style={{ flexGrow: 20 }}></div>
                <ul className={classes.menu}>
                    <MenuItem link='#about' openInNewTab='false'>
                        About
          </MenuItem>
                    <MenuItem link='#speakers' openInNewTab='false'>
                        Speakers
          </MenuItem>
                    <MenuItem link='#schedule' openInNewTab='false'>
                        Schedule
          </MenuItem>
                    <MenuItem link='#subscribe' openInNewTab='false'>
                        Subscribe
          </MenuItem>
                </ul>
                <ul className={classes.socialMenu}>
                    <MenuItem link='https://www.facebook.com' openInNewTab='true'>
                        <FacebookIcon />
                    </MenuItem>
                    <MenuItem link='https://www.twitter.com' openInNewTab='true'>
                        <TwitterIcon />
                    </MenuItem>
                    <MenuItem link='https://www.instagram.com' openInNewTab='true'>
                        <InstagramIcon />
                    </MenuItem>
                </ul>
            </div>
        </Headroom>
    );
}
