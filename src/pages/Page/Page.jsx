import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UltraPlayer from '../../components/UltraPlayer/UltraPlayer';

import classes from './Page.module.css';

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
