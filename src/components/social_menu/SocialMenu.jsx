// React
import React from "react";

// External
import { makeStyles } from "@material-ui/core/styles";

// Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

// Project
import MenuItem from '../menu/MenuItem';


const useStyles = makeStyles({
    socialMenu: {
        listStyleType: `none`,
        margin: `0`,
        padding: `0`,
        textAlign: `center`,
        display: `flex`,
        justifyContent: `space-around`,
    },
});

export default function SocialMenu() {
    const classes = useStyles();

    return (<ul className={classes.socialMenu}>
        <MenuItem link='https://www.facebook.com/FRCJumpstartNE/' openInNewTab='true'>
            <FacebookIcon />
        </MenuItem>
        <MenuItem link='https://www.twitter.com' openInNewTab='true'>
            <TwitterIcon />
        </MenuItem>
        <MenuItem link='https://www.instagram.com' openInNewTab='true'>
            <InstagramIcon />
        </MenuItem>
    </ul>);
}