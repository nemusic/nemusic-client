import React from 'react';

import classes from '../styles/Page.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UltraPlayer from '../components/UltraPlayer';

function Page({ children }) {
  return (
    <div>
      <Header Header name="abobaaaaa" userAvatar="https://i.ibb.co/0jwh2XB/profile-img.png" />
      <div className={classes.content}>
        {children}
      </div>
      <Footer />
      <UltraPlayer />
    </div>
  );
}

export default Page;
