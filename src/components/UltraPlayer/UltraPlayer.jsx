import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './UltraPlayer.scss';

import {
  incremented,
  decremented,
  trackChanged,
  trackLikeChanged,
  isPlayingChanged
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
import authHeader from '../../services/auth-header';

const API_URL = 'http://localhost:8080/api/';

function UltraPlayer() {
  const dispatch = useDispatch();
  const player = useRef();
  const [playListShown, setPlayListShown] = useState(false);
  const [listenerSet, setListenerSet] = useState(false);
  const playlist = useSelector((state) => state.player.playlist);
  const currentTrack = useSelector((state) => state.player.current);
  const isPlaying = useSelector((state) => state.player.isPlaying);

  const handleClickNext = () => {
    dispatch(incremented());
  };

  const handleClickPrev = () => {
    dispatch(decremented());
  };

  if (player && player.current && !listenerSet) {
    setListenerSet(true);
    player.current.audio.current.addEventListener('play', () => {
      dispatch(isPlayingChanged(true));
    }, false);
    player.current.audio.current.addEventListener('pause', () => {
      dispatch(isPlayingChanged(false));
    });
  }

  const handleIsPlayingChanged = () => {
    if (isPlaying) {
      player.current.audio.current.play();
    } else {
      player.current.audio.current.pause();
    }
  };
  useEffect(handleIsPlayingChanged, [isPlaying]);

  const handleClickTrack = (i) => {
    if (i !== currentTrack.id) {
      dispatch(trackChanged(i));
    } else {
      dispatch(isPlayingChanged(!isPlaying));
    }
  };

  const showPlayList = () => {
    setPlayListShown(!playListShown);
  };

  const handleLike = (id, isLiked) => {
    dispatch(trackLikeChanged(id));
    fetch(API_URL.concat(`user/likes?id=${id}&operation=${!isLiked ? 'like' : 'dislike'}`), { headers: authHeader(), method: 'POST' });
  };

  return (
    <div id="player" className={(playListShown ? 'shown' : '').concat(window.location.pathname === '/login' ? 'hidden' : '')}>
      <p>{playlist.title}</p>
      <div id="playlist">
        {playlist.tracks.map((Track) => {
          return (
            <div className="track-mini" key={Track.id}>
              <button className="mini-play" type="button" onClick={handleClickTrack.bind(this, Track.id)}>
                {(
                  Track.id === currentTrack.id
                  && isPlaying
                ) ? <PauseMiniIcon /> : <PlayMiniIcon />}
              </button>
              <p>{Track.title} - {Track.author_name}</p>
              <button className="mini-like" type="button" onClick={handleLike.bind(this, Track.id, Track.is_liked)}>
                {(Track.is_liked) ? <LikeMiniActiveIcon /> : <LikeMiniIcon />}
              </button>
              <p>{Track.duration}</p>
            </div>
          );
        })}
        <div className="track-mini" />
      </div>
      <AudioPlayer
        ref={player}
        onEnded={handleClickNext}
        autoPlayAfterSrcChange={true}
        src={currentTrack !== null ? currentTrack.media : ''}
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
              <img src={currentTrack !== null ? currentTrack.cover : ''} alt="track-cover" />
            </div>
            <div id="player-track-info">
              <p id="player-track-name">{currentTrack !== null ? currentTrack.title : ''}</p>
              <p id="player-track-author">{currentTrack !== null ? currentTrack.author_name : ''}</p>
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
