import React from 'react';
import { Navigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import AuthService from '../../services/AuthService';

import classes from './Page.module.css';

function Page({ children }) {
  if (!AuthService.getCurrentUser()) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      <div className={classes.content}>
        {children}
      </div>
      <Footer />
      <div id="player-shadow" />
    </div>
  );
}

export default Page;
