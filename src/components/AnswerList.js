import React from "react";
import './AnswerList.scss';

function AnswerList({ answers }) {
  const answerItems = answers.map((item, index) => (<li key={index} className="answer-list__item">{item}</li>));

  return (
    <ul className="answer-list">
      { answerItems }
    </ul>
  );
}

export default AnswerList;
