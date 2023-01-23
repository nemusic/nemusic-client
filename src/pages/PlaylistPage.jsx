import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authHeader from '../services/auth-header';

import PlaylistHeader from '../components/PlaylistHeader/PlaylistHeader';
import TrackList from '../components/TrackList/TrackList';
import {
  playlistChanged,
  trackChanged,
  isPlayingChanged
} from '../redux_features/player/player-slice';

import Page from './Page/Page';

const API_URL = 'http://localhost:8080/api/';

function PlaylistPage() {
  const dispatch = useDispatch();
  const currentPlaylistId = useSelector((state) => state.player.playlist.id);
  const currentTrack = useSelector((state) => state.player.current);
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const location = useLocation();
  const { playlistId } = location.state;

  const [playlist, setPlaylist] = useState({ tracks: [] });

  useEffect(() => {
    fetch(API_URL.concat('playlist/').concat(playlistId), { headers: authHeader() })
      .then((response) => response.json())
      .then((data) => {
        const tmp = data;
        setPlaylist(tmp);
        return tmp;
      });
  }, [playlistId]);

  const trackOnClickPlay = (trackId) => {
    if (currentPlaylistId !== playlist.id) {
      dispatch(playlistChanged(playlist));
    }
    if (trackId !== currentTrack.id) {
      dispatch(trackChanged(trackId));
    } else {
      dispatch(isPlayingChanged(!isPlaying));
    }
  };

  return (
    <Page>
      <div>
        <PlaylistHeader
          cover={playlist.cover}
          title={playlist.title}
          description={playlist.description}
        />
        <TrackList tracks={playlist.tracks} onClickPlay={trackOnClickPlay} />
      </div>
    </Page>
  );
}

export default PlaylistPage;
