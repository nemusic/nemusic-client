import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import '../styles/UltraPlayer.scss';

function UltraPlayer() {
  return (
    <AudioPlayer
      src="music/da.mp3"
      customAdditionalControls={[]}
      showSkipControls={!false}
      showJumpControls={false}
    />
  );
}

export default UltraPlayer;
