import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Page from '../Page/Page';
import TrackList from '../../components/TrackList/TrackList';
import {
  isPlayingChanged,
  playlistChanged,
  trackChanged
} from '../../redux_features/player/player-slice';

import authHeader from '../../services/auth-header';

const API_URL = 'http://localhost:8080/api/user/likes';

function LikesPage() {
  const dispatch = useDispatch();
  const currentPlaylistId = useSelector((state) => state.player.playlist.id);
  const currentTrack = useSelector((state) => state.player.current);
  const isPlaying = useSelector((state) => state.player.isPlaying);

  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    fetch(API_URL, { headers: authHeader() })
      .then((response) => response.json())
      .then((data) => {
        setTracks(data);
      });
  }, []);

  const trackOnClickPlay = (trackId) => {
    if (currentPlaylistId !== 0) {
      const tmp = tracks;
      dispatch(playlistChanged({
        id: 0,
        title: 'Избранное',
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

  return (
    <Page>
      <h1>Понравившиеся треки</h1>
      <TrackList tracks={tracks} onClickPlay={trackOnClickPlay} />
    </Page>
  );
}

export default LikesPage;
