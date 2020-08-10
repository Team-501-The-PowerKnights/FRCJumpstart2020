import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import TopMenu from '../components/menu/TopMenu';
import Footer from '../components/footer/Footer';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import banner from '../images/banner.jpg';
import logo from '../images/logo.png';
import crowd from '../images/crowd.jpeg';

import 'typeface-nunito-sans';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Home() {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
        integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
        crossOrigin='anonymous'
      />
      <CssBaseline />
      <TopMenu />
      <Jumbotron
        className='text-center'
        style={{
          margin: 0,
          backgroundImage: `url(${banner})`,
          backgroundAttachment: `fixed`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          padding: `17.5%`,
        }}>
        <Card
          style={{ width: '18rem', marginLeft: `auto`, marginRight: `auto` }}>
          <Card.Img variant='top' src={logo} />
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
      </Jumbotron>
      <Jumbotron
        className='text-light'
        id='about'
        style={{ backgroundColor: `#2F3292`, marginBottom: 0, padding: `10%` }}>
        <ListGroup
          style={{ margin: `auto`, maxWidth: `45rem` }}
          variant='flush'>
          <ListGroup.Item
            className='text-light'
            style={{ backgroundColor: `#2F3292` }}>
            <h1>FRC Jumpstart</h1>
          </ListGroup.Item>
          <ListGroup.Item
            className='text-light'
            style={{ backgroundColor: `#2F3292` }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
            ex, euismod dignissim sem at, aliquet congue felis. Duis scelerisque
            luctus lobortis. Cras tempor fringilla dictum. Vivamus at urna odio.
            Cras id dignissim mi. Duis luctus, libero vitae elementum tincidunt,
            dolor leo efficitur sem, sed vehicula diam sapien at nibh. Aliquam
            pharetra nulla vel vehicula sodales. Phasellus ornare, nisl in
            vulputate eleifend, libero ipsum vulputate ex, eget vehicula nisl
            nisl eu nisl.{' '}
          </ListGroup.Item>
        </ListGroup>
      </Jumbotron>
      <Jumbotron
        style={{
          margin: 0,
          backgroundImage: `url(${crowd})`,
          backgroundAttachment: `fixed`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          padding: `17.5%`,
        }}></Jumbotron>
      <Jumbotron
        className='text-light'
        style={{ backgroundColor: `#FFDE17`, marginBottom: 0, padding: `10%` }}>
        <div style={{
          marginLeft: `auto`,
          marginRight: `auto`,
        }}>
          <ListGroup horizontal='md' style={{ display: `flex` }}>
            <ListGroup.Item style={{
              backgroundColor: `#FFDE17`,
              border: `none`,
              flexGrow: 2,
            }}>
              <Card
                className='text-center'
                style={{ backgroundColor: `#FFFFFF`, display: `inline-block`, width: `100%` }}>
                <Card.Body>
                  <Card.Title style={{ backgroundColor: `#FFDE17` }}></Card.Title>
                </Card.Body>
                <Card.Footer className='text-dark'>Participants</Card.Footer>
              </Card>
            </ListGroup.Item>
            <ListGroup.Item style={{
              backgroundColor: `#FFDE17`,
              border: `none`,
              flexGrow: 2,
            }}><Card
              className='text-center'
              style={{ backgroundColor: `#FFFFFF`, display: `inline-block`, width: `100%` }}>
                <Card.Body>
                  <Card.Title style={{ backgroundColor: `#FFDE17` }}></Card.Title>
                </Card.Body>
                <Card.Footer className='text-dark'>Tracks</Card.Footer>
              </Card></ListGroup.Item>
            <ListGroup.Item style={{
              backgroundColor: `#FFDE17`,
              border: `none`,
              flexGrow: 2,
            }}><Card
              className='text-center'
              style={{ backgroundColor: `#FFFFFF`, display: `inline-block`, width: `100%` }}>
                <Card.Body>
                  <Card.Title style={{ backgroundColor: `#FFDE17` }}></Card.Title>
                </Card.Body>
                <Card.Footer className='text-dark'>Sessions</Card.Footer>
              </Card></ListGroup.Item>
            <ListGroup.Item style={{
              backgroundColor: `#FFDE17`,
              border: `none`,
              flexGrow: 2,
            }}><Card
              className='text-center'
              style={{ backgroundColor: `#FFFFFF`, display: `inline-block`, width: `100%` }}>
                <Card.Body>
                  <Card.Title style={{ backgroundColor: `#FFDE17` }}></Card.Title>
                </Card.Body>
                <Card.Footer className='text-dark'>Speakers</Card.Footer>
              </Card></ListGroup.Item >
          </ListGroup >
        </div>
      </Jumbotron >
      <Jumbotron
        className='text-light'
        id='speakers'
        style={{ backgroundColor: `#2F3292`, marginBottom: 0, padding: `10%` }}>
        <ListGroup
          style={{ margin: `auto`, maxWidth: `45rem` }}
          variant='flush'>
          <ListGroup.Item
            className='text-light'
            style={{ backgroundColor: `#2F3292` }}>
            <h1>Speakers</h1>
          </ListGroup.Item>
          <ListGroup.Item
            className='text-light'
            style={{ backgroundColor: `#2F3292` }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
            ex, euismod dignissim sem at, aliquet congue felis. Duis scelerisque
            luctus lobortis. Cras tempor fringilla dictum. Vivamus at urna odio.
            Cras id dignissim mi. Duis luctus, libero vitae elementum tincidunt,
            dolor leo efficitur sem, sed vehicula diam sapien at nibh. Aliquam
            pharetra nulla vel vehicula sodales. Phasellus ornare, nisl in
            vulputate eleifend, libero ipsum vulputate ex, eget vehicula nisl
            nisl eu nisl.{' '}
          </ListGroup.Item>
        </ListGroup>
      </Jumbotron>
      <Jumbotron
        style={{
          margin: 0,
          backgroundImage: `url(${crowd})`,
          backgroundAttachment: `fixed`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          padding: `17.5%`,
        }}></Jumbotron>
      <Jumbotron
        className='text-light'
        id='schedule'
        style={{ backgroundColor: `#FFDE17`, marginBottom: 0, padding: `10%` }}>
        <ListGroup
          style={{ margin: `auto`, maxWidth: `45rem` }}
          variant='flush'>
          <ListGroup.Item
            className='text-light'
            style={{ backgroundColor: `#FFDE17` }}>
            <h1>Schedule</h1>
          </ListGroup.Item>
          <ListGroup.Item
            className='text-light'
            style={{ backgroundColor: `#FFDE17` }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
            ex, euismod dignissim sem at, aliquet congue felis. Duis scelerisque
            luctus lobortis. Cras tempor fringilla dictum. Vivamus at urna odio.
            Cras id dignissim mi. Duis luctus, libero vitae elementum tincidunt,
            dolor leo efficitur sem, sed vehicula diam sapien at nibh. Aliquam
            pharetra nulla vel vehicula sodales. Phasellus ornare, nisl in
            vulputate eleifend, libero ipsum vulputate ex, eget vehicula nisl
            nisl eu nisl.{' '}
          </ListGroup.Item>
        </ListGroup>
      </Jumbotron>
      <Jumbotron
        style={{
          margin: 0,
          backgroundImage: `url(${crowd})`,
          backgroundAttachment: `fixed`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          padding: `17.5%`,
        }}></Jumbotron>
      <Jumbotron
        className='text-light'
        style={{ backgroundColor: `#2F3292`, marginBottom: 0, padding: `10%` }}>
        <ListGroup
          style={{ margin: `auto`, maxWidth: `45rem` }}
          variant='flush'>
          <ListGroup.Item
            className='text-light'
            style={{ backgroundColor: `#2F3292` }}>
            <h1>Sponsors</h1>
          </ListGroup.Item>
          <ListGroup.Item
            className='text-light'
            style={{ backgroundColor: `#2F3292` }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
            ex, euismod dignissim sem at, aliquet congue felis. Duis scelerisque
            luctus lobortis. Cras tempor fringilla dictum. Vivamus at urna odio.
            Cras id dignissim mi. Duis luctus, libero vitae elementum tincidunt,
            dolor leo efficitur sem, sed vehicula diam sapien at nibh. Aliquam
            pharetra nulla vel vehicula sodales. Phasellus ornare, nisl in
            vulputate eleifend, libero ipsum vulputate ex, eget vehicula nisl
            nisl eu nisl.{' '}
          </ListGroup.Item>
        </ListGroup>
      </Jumbotron>
      <Jumbotron
        style={{
          margin: 0,
          backgroundImage: `url(${crowd})`,
          backgroundAttachment: `fixed`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          padding: `17.5%`,
        }}></Jumbotron>
      <Footer />
    </>
  );
}
