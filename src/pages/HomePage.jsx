import React from 'react';

import TrackList from '../components/TrackList';
import tracks from '../helpers/TrackExamples';

import Page from './Page';

function Home() {
  return (
    <Page>
      <TrackList tracks={tracks} />
    </Page>
  );
}

export default Home;
