import React, { useState, useEffect } from 'react';

import TrackList from '../components/TrackList/TrackList';
import CardStack from '../components/CardStack/CardStack';
import AuthService from '../services/AuthService';

import Page from './Page/Page';

const API_URL = 'http://localhost:8080/api/home';

function Home() {
  AuthService.login('alefunt', 'password');
  const [cards, setCards] = useState([]);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCards(data.playlists);
        setTracks(data.tracks);
      });
  }, []);

  return (
    <Page>
      <h1>Настроение</h1>
      <CardStack cards={cards.slice(0, 4)} />
      <h1>Популярное</h1>
      <TrackList tracks={tracks} />
    </Page>
  );
}

export default Home;
