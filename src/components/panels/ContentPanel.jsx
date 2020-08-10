import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ContentPanel({ backgroundColor, children }) {
  return (
    <Jumbotron
      className='text-light'
      style={{
        backgroundColor: `${backgroundColor}`,
        marginBottom: 0,
        padding: `10%`,
      }}>
      {children}
    </Jumbotron>
  );
}

export function StandardContentPanel({ backgroundColor, title, content }) {
  return (
    <ContentPanel backgroundColor={backgroundColor}>
      <ListGroup style={{ margin: `auto`, maxWidth: `45rem` }} variant='flush'>
        <ListGroup.Item
          className='text-light'
          style={{ backgroundColor: `${backgroundColor}` }}>
          <h1>{title}</h1>
        </ListGroup.Item>
        <ListGroup.Item
          className='text-light'
          style={{ backgroundColor: `${backgroundColor}` }}>
          {content}
        </ListGroup.Item>
      </ListGroup>
    </ContentPanel>
  );
}
