import React from 'react';

import PlaylistHeader from '../components/PlaylistHeader';
import TrackList from '../components/TrackList';

import playlist from '../samples/playlistSample';

import Page from './Page';

function PlaylistPage() {
  return (
    <Page>
      <div>
        <PlaylistHeader headerInfo={playlist.headerInfo} />
        <TrackList tracks={playlist.tracks} />
      </div>
    </Page>
  );
}

export default PlaylistPage;
