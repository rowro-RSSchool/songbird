import React from "react";
import './Question.scss';
import birdPlaceholder from '../assets/bird-placeholder.jpg';

function Question({ image, name, audio, isShowAnswer }) {

  const title = (isShowAnswer) ? name : '******';
  const imageUrl = (isShowAnswer) ? image : birdPlaceholder;

  return (
    <div className="question">
      <div className="question__image" style={{backgroundImage: `url(${imageUrl})`}}/>
      <div className="question__content">
        <div className="question__title">{title}</div>
        <div className="question__player">
          <audio src={audio} controls={true} />
        </div>
      </div>
    </div>
  );
}

export default Question;
