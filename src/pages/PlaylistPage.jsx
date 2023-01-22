import React from 'react';

import PlaylistHeader from '../components/PlaylistHeader/PlaylistHeader';
import TrackList from '../components/TrackList/TrackList';

import playlist from '../samples/playlistSample';

import Page from './Page/Page';

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
