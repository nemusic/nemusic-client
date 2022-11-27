import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Collections from './CollectionsPage';
import Profile from './ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header name="abobaaaaa" user_avatar="https://i.ibb.co/0jwh2XB/profile-img.png" />
        <Routes>
          <Route path="/collections" element={<Collections />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
