import React from "react";
import {withCustomAudio} from "react-soundplayer/lib/addons";
import {PlayButton, Progress, Timer} from "react-soundplayer/lib/components";

import 'react-soundplayer/styles/progress.css';
import 'react-soundplayer/styles/buttons.css';
import 'react-soundplayer/styles/icons.css';

import './CustomAudioPlayer.scss'

function CustomAudioPlayer(props) {
  return (
    <div className="custom-audio-player">
      <PlayButton className="custom-audio-player__play-button" seeking={true} {...props} />
      <div className="custom-audio-player__content">
        <Progress
          className="custom-audio-player__progress"
          innerClassName="custom-audio-player__progress-inner"
          {...props}
        />
        <Timer className="custom-audio-player__timer" {...props} />
      </div>
    </div>
  );
}

export default CustomAudioPlayer;
