import React from 'react';

import cards from '../samples/CardSamples';
import CardStack from '../components/CardStack';

import classes from '../styles/CollectionsPage.module.css';

import Page from './Page';

function CollectionsPage() {
  return (
    <Page>
      <div>
        <div className={classes.collections_header}>
          Коллекции
        </div>
        <CardStack cards={cards} writable />
      </div>
    </Page>
  );
}

export default CollectionsPage;
