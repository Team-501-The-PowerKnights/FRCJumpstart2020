import React from 'react';

import logo from '../../images/logo.png';

import 'typeface-nunito-sans';

import Media from 'react-bootstrap/Media';

export default function Footer() {
  return (
    <Media
      style={{
        backgroundColor: `#FFDE17`,
        padding: `2%`,
        bottom: 0,
        left: 0,
        width: `100%`,
      }}>
      <img src={logo} alt={`FRC Jumpstart`} height={`150`} />
      <Media.Body>
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

        <p className='text-light' style={{ fontFamily: 'Nunito Sans' }}>
          FRC Jumpstart New England. Website by Team 501 - The PowerKnights
          Robotics Team
        </p>
      </Media.Body>
    </Media>
  );
}
