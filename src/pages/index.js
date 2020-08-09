import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import TopMenu from '../components/menu/TopMenu';
import Footer from '../components/footer/Footer';

import 'typeface-nunito-sans';

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
      <CssBaseline />{' '}
      {/** Can I modify the CSSBaseline / do theming with my colors and fonts? */}
      <TopMenu />
      <Footer />
    </>
  );
}
