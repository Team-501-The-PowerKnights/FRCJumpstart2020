import React from 'react';
import TopMenu from '../components/menu/TopMenu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../components/footer/Footer';

import banner from '../images/banner.jpg';

import 'typeface-nunito-sans';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  parallax: {
    backgroundImage: `url(${banner})`,
    backgroundAttachment: `fixed`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    height: `50vw`,
    display: `flex`,
    textAlign: `center`,
    alignItems: `center`,
    alignContent: `center`,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />  {/** Can I modify the CSSBaseline / do theming with my colors and fonts? */}
      <TopMenu />
      <Footer />
    </>
  );
}
