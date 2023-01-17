import React, { useState, useEffect } from 'react';

import TrackList from '../components/TrackList';
import CardStack from '../components/CardStack';

import Page from './Page';

function Home() {
  const [cards, setCards] = useState([]);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/api/home')
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
