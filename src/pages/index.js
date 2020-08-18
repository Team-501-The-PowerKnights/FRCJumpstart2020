import React from 'react';
import { Helmet } from 'react-helmet';

import CssBaseline from '@material-ui/core/CssBaseline';

import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import TopMenu from '../components/menu/TopMenu';
import Footer from '../components/footer/Footer';

import Button from 'react-bootstrap/Button';

import banner from '../images/banner.webp';
import logo from '../images/logo.webp';
import crowd from '../images/crowd.webp';

import 'typeface-nunito-sans';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ParallaxPanel from '../components/panels/ParallaxPanel';
import ContentPanel, {
  StandardContentPanel,
} from '../components/panels/ContentPanel';

export default function Home() {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>FRC Jumpstart</title>
        <meta
          name='description'
          content='FRC Jumpstart is a New England-based learning and training event for FTC and FRC teams of all levels.'
        />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
          integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
          crossOrigin='anonymous'
        />
      </Helmet>
      <CssBaseline />
      <TopMenu />
      <ParallaxPanel image={banner}>
        <Card
          style={{ width: '50vw', marginLeft: `auto`, marginRight: `auto` }}>
          <Card.Img variant='top' src={logo} alt='FRC Jumpstart' width='100' />
          <Card.Body>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <EventIcon />{' '}
                <p style={{ fontFamily: `Nunito Sans`, display: `inline` }}>
                  November 21, 2020
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <LocationOnIcon />{' '}
                <p style={{ fontFamily: `Nunito Sans`, display: `inline` }}>
                  YouTube / Twitch
                </p>
              </ListGroup.Item>
            </ListGroup>
            <Button variant='primary' style={{ backgroundColor: `#2F3292` }}>
              <a href='/' style={{ color: `#FFFFFF`, textDecoration: `none` }}>
                Sign Up Now
              </a>
            </Button>
          </Card.Body>
        </Card>
      </ParallaxPanel>
      <StandardContentPanel
        title='FRC Jumpstart'
        backgroundColor='#2F3292'
        content='Created by a group of FIRST mentors, alumni, and students, including NEFIRST robot inspectors and judges, SNHU staff, and members of FRC Team 501 - The PowerKnights, FRC Jumpstart was founded in 2019 in order to bring veteran FIRST Robotics Competition (FRC) teams together with rookie FRC teams and team members in order to share knowledge and provide guidance. At FRC Jumpstart, speakers present on areas of expertise ranging from securing nonprofit status to software development to business planning to bumper creation.'
      />
      <ParallaxPanel image={crowd} />
      <ContentPanel backgroundColor='#FFDE17'>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
          }}>
          <ListGroup horizontal='md' style={{ display: `flex` }}>
            <ListGroup.Item
              style={{
                backgroundColor: `#FFDE17`,
                border: `none`,
                flexGrow: 2,
              }}>
              <Card
                className='text-center'
                style={{
                  backgroundColor: `#FFFFFF`,
                  display: `inline-block`,
                  width: `100%`,
                }}>
                <Card.Body>
                  <Card.Title
                    style={{ backgroundColor: `#FFDE17` }}></Card.Title>
                </Card.Body>
                <Card.Footer className='text-dark'>Participants</Card.Footer>
              </Card>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: `#FFDE17`,
                border: `none`,
                flexGrow: 2,
              }}>
              <Card
                className='text-center'
                style={{
                  backgroundColor: `#FFFFFF`,
                  display: `inline-block`,
                  width: `100%`,
                }}>
                <Card.Body>
                  <Card.Title
                    style={{ backgroundColor: `#FFDE17` }}></Card.Title>
                </Card.Body>
                <Card.Footer className='text-dark'>Tracks</Card.Footer>
              </Card>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: `#FFDE17`,
                border: `none`,
                flexGrow: 2,
              }}>
              <Card
                className='text-center'
                style={{
                  backgroundColor: `#FFFFFF`,
                  display: `inline-block`,
                  width: `100%`,
                }}>
                <Card.Body>
                  <Card.Title
                    style={{ backgroundColor: `#FFDE17` }}></Card.Title>
                </Card.Body>
                <Card.Footer className='text-dark'>Sessions</Card.Footer>
              </Card>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: `#FFDE17`,
                border: `none`,
                flexGrow: 2,
              }}>
              <Card
                className='text-center'
                style={{
                  backgroundColor: `#FFFFFF`,
                  display: `inline-block`,
                  width: `100%`,
                }}>
                <Card.Body>
                  <Card.Title
                    style={{ backgroundColor: `#FFDE17` }}></Card.Title>
                </Card.Body>
                <Card.Footer className='text-dark'>Speakers</Card.Footer>
              </Card>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </ContentPanel>
      <StandardContentPanel
        title='Speakers'
        backgroundColor='#2F3292'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
            ex, euismod dignissim sem at, aliquet congue felis. Duis scelerisque
            luctus lobortis. Cras tempor fringilla dictum. Vivamus at urna odio.
            Cras id dignissim mi. Duis luctus, libero vitae elementum tincidunt,
            dolor leo efficitur sem, sed vehicula diam sapien at nibh. Aliquam
            pharetra nulla vel vehicula sodales. Phasellus ornare, nisl in
            vulputate eleifend, libero ipsum vulputate ex, eget vehicula nisl
            nisl eu nisl.'
      />
      <ParallaxPanel image={crowd} />
      <StandardContentPanel
        title='Schedule'
        backgroundColor='#FFDE17'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
            ex, euismod dignissim sem at, aliquet congue felis. Duis scelerisque
            luctus lobortis. Cras tempor fringilla dictum. Vivamus at urna odio.
            Cras id dignissim mi. Duis luctus, libero vitae elementum tincidunt,
            dolor leo efficitur sem, sed vehicula diam sapien at nibh. Aliquam
            pharetra nulla vel vehicula sodales. Phasellus ornare, nisl in
            vulputate eleifend, libero ipsum vulputate ex, eget vehicula nisl
            nisl eu nisl.'
      />
      <ParallaxPanel image={crowd} />
      <StandardContentPanel
        title='Sponsors'
        backgroundColor='#2F3292'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
            ex, euismod dignissim sem at, aliquet congue felis. Duis scelerisque
            luctus lobortis. Cras tempor fringilla dictum. Vivamus at urna odio.
            Cras id dignissim mi. Duis luctus, libero vitae elementum tincidunt,
            dolor leo efficitur sem, sed vehicula diam sapien at nibh. Aliquam
            pharetra nulla vel vehicula sodales. Phasellus ornare, nisl in
            vulputate eleifend, libero ipsum vulputate ex, eget vehicula nisl
            nisl eu nisl.'
      />
      <ParallaxPanel image={crowd} />
      <Footer />
    </>
  );
}
