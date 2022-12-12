import React from 'react';

import TrackList from '../components/TrackList';
import CardStack from '../components/CardStack';

import tracks from '../samples/TrackSamples';
import cards from '../samples/CardSamples';

import Page from './Page';

function Home() {
  return (
    <Page>
      <h1>Настроение</h1>
      <CardStack cards={cards.slice(0, 3)} />
      <h1>Популярное</h1>
      <TrackList tracks={tracks} />
    </Page>
  );
}

export default Home;
