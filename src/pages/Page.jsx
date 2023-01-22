import React from 'react';

import classes from '../styles/Page.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UltraPlayer from '../components/UltraPlayer/UltraPlayer';

function Page({ children }) {
  return (
    <div>
      <Header />
      <div className={classes.content}>
        {children}
      </div>
      <Footer />
      <UltraPlayer />
      <div id="player-shadow" />
    </div>
  );
}

export default Page;
