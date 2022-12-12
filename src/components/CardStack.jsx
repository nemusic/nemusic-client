import React from 'react';
import { Stack } from '@mui/system';

import classes from '../styles/CardStack.module.css';

import CardSamples from '../samples/CardSamples';

import CardWoMui from './CardWoMui';
import NewPlaylist from './NewPlaylist';

function CardStack() {
  const CardNewStack = CardSamples.slice(0, 3);
  return (
    <div className={classes.stackContainer}>
      <Stack direction="row" spacing="20px" sx={{ flexWrap: 'wrap' }}>
        {CardNewStack.map((cardInstance) => (
          <CardWoMui
            title={cardInstance.title}
            description={cardInstance.description}
            cover={cardInstance.cover}
          />
        ))}
        <NewPlaylist />
      </Stack>
    </div>
  );
}
export default CardStack;
