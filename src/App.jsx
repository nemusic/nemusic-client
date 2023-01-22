import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import LikesPage from './pages/LikesPage/LikesPage';
import ProfilePage from './pages/ProfilePage';
import PlaylistPage from './pages/PlaylistPage';
import EditPlaylistPage from './pages/EditPlaylistPage';
import LoginPage from './pages/LoginPage';
import Logout from './pages/Logout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/edit" element={<EditPlaylistPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
