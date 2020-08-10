import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

export default function ParallaxPanel({ image, children }) {
  return (
    <Jumbotron
      className='text-center'
      style={{
        margin: 0,
        backgroundImage: `url(${image})`,
        backgroundAttachment: `fixed`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        padding: `17.5%`,
      }}>
      {children}
    </Jumbotron>
  );
}
