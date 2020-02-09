import React from "react";
import './AnswerList.scss';

function AnswerList({answers, rightAnswerId, checkedAnswers, onChangeAnswer}) {
  const answerItems = answers.map((item, index) => {
    const isRightAnswer = item.id === rightAnswerId;
    let statusClass = '';
    if (checkedAnswers.includes(item.id)) {
      statusClass = (isRightAnswer) ? 'answer-list__item_success' : 'answer-list__item_error';
    }

    return (
      <li
        key={index}
        className={`answer-list__item ${statusClass}`}
        onClick={() => onChangeAnswer(item.id)}
      >{item.name}</li>
    );
  });

  return (
    <ul className="answer-list">
      {answerItems}
    </ul>
  );
}

export default AnswerList;
