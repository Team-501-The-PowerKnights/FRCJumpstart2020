import React, { useState } from 'react';

import 'typeface-nunito-sans';

export default function MenuItem({ link, children, openInNewTab, hoverColor }) {
  const [hovering, setHovering] = useState(false);

  return (
    <a href={link}
      target={openInNewTab ? '_blank' : '_self'}
      rel={`noreferrer`}
      style={{
        color: hovering ? hoverColor : `#FFFFFF`,
        fontFamily: 'Nunito Sans',
        textDecoration: `none`,
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
    </a>
  );
}
