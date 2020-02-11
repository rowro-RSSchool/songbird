import React from "react";
import {useAudio} from 'react-use';
// @ts-ignore
import {PlayButton, Progress, Timer} from "react-soundplayer/lib/components";

import 'react-soundplayer/styles/progress.css';
import 'react-soundplayer/styles/buttons.css';
import 'react-soundplayer/styles/icons.css';

import './CustomAudioPlayer.scss'
import {getPercentage} from "../helpers/number";

interface CustomAudioPlayerProps {
  audioUrl: string,
  isPauseAudio?: boolean
}

const CustomAudioPlayer: React.FC<CustomAudioPlayerProps> = ({audioUrl, isPauseAudio}) => {
  const [audio, state, controls] = useAudio({
    src: audioUrl,
    preload: 'auto',
  });

  if (isPauseAudio) {
    controls.pause();
  }

  return (
    <div className="custom-audio-player">
      {audio}
      <PlayButton
        className="custom-audio-player__play-button"
        playing={!state.paused}
        onTogglePlay={state.paused ? controls.play : controls.pause}
      />
      <div className="custom-audio-player__content">
        <Progress
          className="custom-audio-player__progress"
          innerClassName="custom-audio-player__progress-inner"
          value={getPercentage(state.time, state.duration)}
          onSeekTrack={(seek: number) => controls.seek(state.duration * seek)}
        />
        <Timer currentTime={state.time} duration={state.duration}/>
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
