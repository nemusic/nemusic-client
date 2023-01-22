import React from 'react';

import classes from '../styles/Page.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UltraPlayer from '../components/UltraPlayer';

function Page({ children }) {
  return (
    <div>
      <Header />
      <div className={classes.content}>
        {children}
      </div>
      <Footer />
      <UltraPlayer />
    </div>
  );
}

export default Page;
