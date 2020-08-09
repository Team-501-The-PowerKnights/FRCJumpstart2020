import React from 'react';

import SocialMenu from '../social_menu/SocialMenu';

import logo from '../../images/logo.png';

import 'typeface-nunito-sans';

export default function Footer() {
  return (
    <div
      style={{
        position: `relative`,
        left: 0,
        bottom: 0,
        width: `100%`,
        backgroundColor: `#FFDE17`,
        display: `flex`,
        flexDirection: `column`,
      }}>
      <div
        style={{ display: `flex`, alignItems: `center`, flexDirection: `row` }}>
        <div style={{ flexGrow: 2 }} />
        <a href='/' style={{ margin: `0`, padding: `0` }}>
          <img
            src={logo}
            alt={`FRC Jumpstart`}
            height={`150`}
            style={{ flexGrow: 5 }}
          />
        </a>
        <div style={{ flexGrow: 0.5 }}>
          <ul style={{ listStyleType: `none` }}>
            <li
              style={{
                color: `#FFFFFF`,
                fontFamily: `Nunito Sans`,
                fontSize: `16px`,
              }}>
              FRC Jumpstart New England
            </li>
            <li
              style={{
                color: `#FFFFFF`,
                fontFamily: `Nunito Sans`,
                fontSize: `16px`,
              }}>
              Team 501 - The PowerKnights Robotics Team
            </li>
            <li>
              <a
                style={{
                  color: `#FFFFFF`,
                  fontFamily: `Nunito Sans`,
                  fontSize: `16px`,
                  textDecoration: `none`,
                }}
                href='https://www.google.com/maps/place/329+Mast+Rd,+Goffstown,+NH+03045/@43.0093354,-71.5398788,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2484f84512f11:0x95fa667bd1c063ed!8m2!3d43.0093354!4d-71.5376901'
                target='_blank'
                rel='noreferrer'>
                329 Mast Road, Room 101, Goffstown, NH 03045
              </a>
            </li>
            <li>
              <a
                style={{
                  color: `#FFFFFF`,
                  fontFamily: `Nunito Sans`,
                  fontSize: `16px`,
                  textDecoration: `none`,
                }}
                href='mailto:FRCJumpstart@powerknights.com'>
                FRCJumpstart@powerknights.com
              </a>
            </li>
            <li>
              <a
                style={{
                  color: `#FFFFFF`,
                  fontFamily: `Nunito Sans`,
                  fontSize: `16px`,
                  textDecoration: `none`,
                }}
                href='tel:603-512-9166'>
                603-512-9166
              </a>
            </li>
          </ul>
        </div>
        <div style={{ flexGrow: 2.5 }} />
      </div>
      <div
        style={{ display: `flex`, alignItems: `center`, flexDirection: `row` }}>
        <div style={{ flexGrow: 2.5 }}></div>
        <div style={{ flexGrow: 0.5 }}>
          <SocialMenu hoverColor='#2F3292' />
        </div>
        <div style={{ flexGrow: 2 }}></div>
      </div>
      <div style={{ flexGrow: 2, paddingTop: `1%` }}>
        <div
          style={{
            width: `50%`,
            height: `2px`,
            backgroundColor: `#FFFFFF`,
            borderColor: `#FFFFFF`,
            borderWidth: `2px`,
            borderRadius: `2px`,
            marginLeft: `25%`,
            marginRight: `25%`,
          }}
        />
      </div>
      <div style={{ flexGrow: 2, marginLeft: `25%` }}>
        <p
          style={{
            color: `#FFFFFF`,
            fontFamily: `Nunito Sans`,
            fontSize: `16px`,
          }}>
          FRC Jumpstart New England. Website by Team 501 - The PowerKnights
          Robotics Team
        </p>
      </div>
    </div>
  );
}
