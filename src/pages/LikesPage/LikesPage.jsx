import React, { useState, useEffect } from 'react';

import Page from '../Page/Page';
import TrackList from '../../components/TrackList/TrackList';

import authHeader from '../../services/auth-header';

const API_URL = 'http://localhost:8080/api/user/likes';

function LikesPage() {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    fetch(API_URL, { headers: authHeader() })
      .then((response) => response.json())
      .then((data) => {
        setTracks(data);
      });
  }, []);

  return (
    <Page>
      <h1>Понравившиеся треки</h1>
      <TrackList tracks={tracks} />
    </Page>
  );
}

export default LikesPage;
