import React, { useState } from 'react';
import 'typeface-nunito-sans';

export default function MenuItem({ link, children, openInNewTab }) {
  const [hovering, setHovering] = useState(false);

  return (
    <a
      href={link}
      style={{
        color: hovering ? `#FFDE17` : `#FFFFFF`,
        fontFamily: 'Nunito Sans',
        textDecoration: `none`,
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      target={openInNewTab ? '_blank' : '_self'}>
      {children}
    </a>
  );
}
