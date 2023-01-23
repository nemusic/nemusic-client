import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TrackList from '../components/TrackList/TrackList';
import CardStack from '../components/CardStack/CardStack';
import AuthService from '../services/AuthService';

import {
  isPlayingChanged,
  playlistChanged,
  trackChanged
} from '../redux_features/player/player-slice';

import Page from './Page/Page';

const API_URL = 'http://localhost:8080/api/';

function Home() {
  const dispatch = useDispatch();
  const currentPlaylistId = useSelector((state) => state.player.playlist.id);
  const currentTrack = useSelector((state) => state.player.current);
  const isPlaying = useSelector((state) => state.player.isPlaying);

  // AuthService.login('alefunt', 'password');
  const [cards, setCards] = useState([]);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    fetch(API_URL.concat('home'))
      .then((response) => response.json())
      .then((data) => {
        setCards(data.playlists);
        setTracks(data.tracks);
      });
  }, []);

  const trackOnClickPlay = (trackId) => {
    if (currentPlaylistId !== 0) {
      const tmp = tracks;
      dispatch(playlistChanged({
        id: 0,
        title: 'Популярное',
        description: '',
        cover: '',
        tracks: tmp
      }));
    }
    if (trackId !== currentTrack.id) {
      dispatch(trackChanged(trackId));
    } else {
      dispatch(isPlayingChanged(!isPlaying));
    }
  };

  const cardOnClickPlay = (playlistId) => {
    if (playlistId !== currentPlaylistId) {
      fetch(API_URL.concat('playlist/').concat(playlistId))
        .then((response) => response.json())
        .then((data) => {
          dispatch(playlistChanged(data));
        });
    }
  };

  return (
    <Page>
      <h1>Настроение</h1>
      <CardStack cards={cards.slice(0, 4)} onClickPlay={cardOnClickPlay} />
      <h1>Популярное</h1>
      <TrackList tracks={tracks} onClickPlay={trackOnClickPlay} />
    </Page>
  );
}

export default Home;
