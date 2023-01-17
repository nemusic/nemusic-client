import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import '../styles/UltraPlayer.scss';

import { incremented, decremented } from '../redux_features/player/player-slice';

import { ReactComponent as PlayIcon } from '../resources/play.svg';
import { ReactComponent as PauseIcon } from '../resources/pause.svg';
import { ReactComponent as PrevIcon } from '../resources/prev.svg';
import { ReactComponent as NextIcon } from '../resources/next.svg';
import { ReactComponent as PlayListIcon } from '../resources/playlist.svg';

function UltraPlayer() {
//   const currentIndex = useSelector((state) => state.player.currentIndex);
//   const playlist = useSelector((state) => state.player.playList);
  const current = useSelector((state) => state.player.current);
  const dispatch = useDispatch();

  const handleClickNext = () => {
    dispatch(incremented());
  };
  const handleClickPrev = () => {
    dispatch(decremented());
  };
  return (
    <AudioPlayer
      onEnded={handleClickNext}
      autoPlayAfterSrcChange={true}
      src={current.src}
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
            <img src={current.albumCoverUrl} alt="track-cover" />
          </div>
          <div id="player-track-info">
            <p id="player-track-name">{current.title}</p>
            <p id="player-track-author">{current.author}</p>
          </div>
        </div>
      )}
      footer={(
        <div>
          <button id="player-show-playlist" type="button">
            <PlayListIcon />
          </button>
        </div>
      )}
    />
  );
}

export default UltraPlayer;
