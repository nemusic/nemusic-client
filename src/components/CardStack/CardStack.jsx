import React from 'react';
import { Grid } from '@mui/material';

import PlaylistCard from '../PlaylistCard/PlaylistCard';
import NewPlaylist from '../NewPlaylist/NewPlaylist';

import classes from './CardStack.module.css';

function CardStack({ cards, writable, onClickPlay }) {
  return (
    <div className={classes.stackContainer}>
      <Grid container rowSpacing={6}>
        {cards.map((cardInstance) => (
          <Grid item xs={3}>
            <PlaylistCard
              id={cardInstance.id}
              title={cardInstance.title}
              description={cardInstance.description}
              cover={cardInstance.cover}
              onClickPlay={onClickPlay}
            />
          </Grid>
        ))}
        <Grid item xs={3}>
          {writable ? NewPlaylist() : ''}
        </Grid>
      </Grid>
    </div>
  );
}
export default CardStack;
