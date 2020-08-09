import React from 'react';
import Container from 'react-bootstrap/Container';

export default function ParallaxPanel({ image, children }) {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${image})`,
        width: `100%`,
        height: `auto`,
        backgroundAttachment: `fixed`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `contain`,
      }}>
      {children}
    </Container>
  );
}
