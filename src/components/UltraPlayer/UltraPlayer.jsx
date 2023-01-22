import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './UltraPlayer.scss';

import {
  incremented,
  decremented,
  trackChanged,
  trackLikeChanged
} from '../../redux_features/player/player-slice';

import { ReactComponent as PlayIcon } from '../../resources/play.svg';
import { ReactComponent as PauseIcon } from '../../resources/pause.svg';
import { ReactComponent as PrevIcon } from '../../resources/prev.svg';
import { ReactComponent as NextIcon } from '../../resources/next.svg';
import { ReactComponent as PlayListIcon } from '../../resources/playlist.svg';
import { ReactComponent as PlayMiniIcon } from '../../resources/play-mini.svg';
import { ReactComponent as PauseMiniIcon } from '../../resources/pause-mini.svg';
import { ReactComponent as LikeMiniIcon } from '../../resources/like-mini.svg';
import { ReactComponent as LikeMiniActiveIcon } from '../../resources/like-mini-active.svg';

function UltraPlayer() {
  const dispatch = useDispatch();
  const [playListShown, setPlayListShown] = useState(false);
  const playlist = useSelector((state) => state.player.playlist);
  const currentTrack = useSelector((state) => state.player.current);
  const playlistName = useSelector((state) => state.player.playlistName);

  const audio = document.getElementsByTagName('audio')[0];
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClickNext = () => {
    dispatch(incremented());
  };

  const handleClickPrev = () => {
    dispatch(decremented());
  };

  const handleClickTrack = (i) => {
    if (i !== currentTrack.id) {
      dispatch(trackChanged(i));
      setIsPlaying(true);
      audio.play();
      return;
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    } else {
      setIsPlaying(true);
      audio.play();
    }
  };

  const showPlayList = () => {
    if (playListShown) {
      document.getElementById('player').classList.remove('shown');
    } else {
      document.getElementById('player').classList.add('shown');
    }
    setPlayListShown(!playListShown);
  };

  const handleLike = (i) => {
    dispatch(trackLikeChanged(i));
  };

  return (
    <div id="player">
      <p>{playlistName}</p>
      <div id="playlist">
        {playlist.map((Track) => {
          return (
            <div className="track-mini" key={Track.id}>
              <button className="mini-play" type="button" onClick={handleClickTrack.bind(this, Track.id)}>
                {(Track.id === currentTrack.id && isPlaying) ? <PauseMiniIcon /> : <PlayMiniIcon />}
              </button>
              <p>{Track.title} - {Track.author}</p>
              <button className="mini-like" type="button" onClick={handleLike.bind(this, Track.id)}>
                {(Track.isFavorite) ? <LikeMiniActiveIcon /> : <LikeMiniIcon />}
              </button>
              <p>{Track.duration}</p>
            </div>
          );
        })}
        <div className="track-mini" />
      </div>
      <AudioPlayer
        onEnded={handleClickNext}
        autoPlayAfterSrcChange={true}
        src={currentTrack.src}
        onClickPrevious={handleClickPrev}
        onClickNext={handleClickNext}
        layout="stacked-reverse"
        customAdditionalControls={[]}
        showSkipControls={true}
        showJumpControls={false}
        customIcons={{
          play: <PlayIcon />,
          pause: <PauseIcon />,
          previous: <PrevIcon />,
          next: <NextIcon />
        }}
        header={(
          <div>
            <div id="player-cover">
              <img src={currentTrack.albumCoverUrl} alt="track-cover" />
            </div>
            <div id="player-track-info">
              <p id="player-track-name">{currentTrack.title}</p>
              <p id="player-track-author">{currentTrack.author}</p>
            </div>
          </div>
        )}
        footer={(
          <div>
            <button id="player-show-playlist" type="button" onClick={showPlayList}>
              <PlayListIcon />
            </button>
          </div>
        )}
      />
    </div>
  );
}

export default UltraPlayer;
