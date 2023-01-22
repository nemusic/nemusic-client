import React from 'react';
import { Grid } from '@mui/material';

import CardWoMui from '../PlaylistCard/PlaylistCard';
import NewPlaylist from '../NewPlaylist/NewPlaylist';

import classes from './CardStack.module.css';

function CardStack({ cards, writable }) {
  return (
    <div className={classes.stackContainer}>
      <Grid container rowSpacing={6}>
        {cards.map((cardInstance) => (
          <Grid item xs={3}>
            <CardWoMui
              id={cardInstance.id}
              title={cardInstance.title}
              description={cardInstance.description}
              cover={cardInstance.cover}
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
