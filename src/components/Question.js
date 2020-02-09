import React from "react";
import './Question.scss';
import birdPlaceholder from '../assets/bird-placeholder.jpg';

import CustomAudioPlayer from "./CustomAudioPlayer";
import {withCustomAudio} from "react-soundplayer/lib/addons";

function Question({ image, name, audio, isShowAnswer }) {
  const AudioPlayer = withCustomAudio(CustomAudioPlayer);

  const title = (isShowAnswer) ? name : '******';
  const imageUrl = (isShowAnswer) ? image : birdPlaceholder;

  return (
    <div className="question">
      <div className="question__image" style={{backgroundImage: `url(${imageUrl})`}}/>
      <div className="question__content">
        <div className="question__title">{title}</div>
        <div className="question__player">
          <AudioPlayer streamUrl={audio} preloadType="auto"/>
        </div>
      </div>
    </div>
  );
}

export default Question;
