import React, { useState } from 'react';
import 'typeface-nunito-sans';

export default function MenuItem({ link, children, openInNewTab, hoverColor }) {
  const [hovering, setHovering] = useState(false);

  return (
    <a
      href={link}
      style={{
        color: hovering ? hoverColor : `#FFFFFF`,
        fontFamily: 'Nunito Sans',
        textDecoration: `none`,
        fontSize: `16px`,
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      target={openInNewTab ? '_blank' : '_self'}
      rel={`noreferrer`}>
      {children}
    </a>
  );
}
