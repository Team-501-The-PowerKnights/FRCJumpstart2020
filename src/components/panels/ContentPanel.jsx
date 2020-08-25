import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";

export default function ContentPanel({ backgroundColor, children, id }) {
  return (
    <Jumbotron
      className={backgroundColor === "#FFDE17" ? "text-dark" : "text-light"}
      style={{
        backgroundColor: `${backgroundColor}`,
        marginBottom: 0,
        padding: `10%`,
      }}
      id={id}
    >
      {children}
    </Jumbotron>
  );
}

export function StandardContentPanel({ backgroundColor, title, content, id }) {
  return (
    <ContentPanel backgroundColor={backgroundColor} id={id}>
      <ListGroup style={{ margin: `auto`, maxWidth: `45rem` }} variant="flush">
        <ListGroup.Item
          className={backgroundColor === "#FFDE17" ? "text-dark" : "text-light"}
          style={{ backgroundColor: `${backgroundColor}` }}
        >
          <h1>{title}</h1>
        </ListGroup.Item>
        <ListGroup.Item
          className={backgroundColor === "#FFDE17" ? "text-dark" : "text-light"}
          style={{ backgroundColor: `${backgroundColor}` }}
        >
          {content}
        </ListGroup.Item>
      </ListGroup>
    </ContentPanel>
  );
}
