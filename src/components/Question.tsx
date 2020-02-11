import React from "react";
import './Question.scss';
import birdPlaceholder from '../assets/bird-placeholder.jpg';

import CustomAudioPlayer from "./CustomAudioPlayer";

interface QuestionProps {
  image: string,
  name: string,
  audio: string,
  isShowAnswer: boolean,
  isPauseAudio: boolean,
}

const Question: React.FC<QuestionProps> = ({image, name, audio, isShowAnswer, isPauseAudio}) => {
  const title = (isShowAnswer) ? name : '******';
  const imageUrl = (isShowAnswer) ? image : birdPlaceholder;

  return (
    <div className="question">
      <div className="question__image" style={{backgroundImage: `url(${imageUrl})`}}/>
      <div className="question__content">
        <div className="question__title">{title}</div>
        <div className="question__player">
          <CustomAudioPlayer audioUrl={audio} isPauseAudio={isPauseAudio}/>
        </div>
      </div>
    </div>
  );
};

export default Question;
