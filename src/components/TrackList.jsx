import React from 'react';

import classes from '../styles/TrackList.module.css';

import Track from './Track';

function TrackList({ tracks }) {
  return (
    <div className={classes.track_list}>
      <div className={classes.header}>
        <div className={classes.track}>
          TRACK
        </div>
        <div className={classes.album}>
          ALBUM
        </div>
        <div className={classes.duration}>
          duration
        </div>
      </div>
      {tracks.map((track) => (
        <Track
          title={track.title}
          author={track.author}
          authorUrl={track.authorUrl}
          albumTitle={track.albumTitle}
          albumUrl={track.albumUrl}
          albumCoverUrl={track.albumCoverUrl}
          duration={track.duration}
          isFavorite={track.isFavorite}
        />
      ))}
    </div>
  );
}

export default TrackList;
