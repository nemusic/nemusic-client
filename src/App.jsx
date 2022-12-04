import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Collections from './pages/CollectionsPage';
import Profile from './pages/ProfilePage';

import UltraPlayer from './components/UltraPlayer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header name="abobaaaaa" userAvatar="https://i.ibb.co/0jwh2XB/profile-img.png" />
        <Routes>
          <Route path="/collections" element={<Collections />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <UltraPlayer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
