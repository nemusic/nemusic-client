import React from 'react';

import Track from '../Track/Track';

import classes from './TrackList.module.css';

function TrackList({ tracks, onClickPlay }) {
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
          id={track.id}
          title={track.title}
          authorName={track.author_name}
          // authorUrl=
          album={track.album}
          cover={track.cover}
          media={track.media}
          duration={track.duration}
          isFavorite={track.isFavorite}
          onClickPlay={onClickPlay}
        />
      ))}
    </div>
  );
}

export default TrackList;
