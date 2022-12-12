import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UltraPlayer from '../components/UltraPlayer';

function Page({ children }) {
  return (
    <div>
      <Header Header name="abobaaaaa" userAvatar="https://i.ibb.co/0jwh2XB/profile-img.png" />
      {children}
      <Footer />
      <UltraPlayer />
    </div>
  );
}

export default Page;
