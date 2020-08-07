import React from 'react';
import TopMenu from '../components/menu/TopMenu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <>
      <CssBaseline />
      <TopMenu />
      <Footer />
    </>
  );
}
