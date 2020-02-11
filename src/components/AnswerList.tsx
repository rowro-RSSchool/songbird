import React from "react";
import './AnswerList.scss';

interface IAnswerListItem {
  id: number,
  name: string,
}

interface AnswerListProps {
  answers: Array<IAnswerListItem>,
  rightAnswerId: number,
  checkedAnswers: Array<number>,
  onChangeAnswer: Function,
}

const AnswerList: React.FC<AnswerListProps> = ({answers, rightAnswerId, checkedAnswers, onChangeAnswer}) => {
  const answerItems = answers.map((item: IAnswerListItem, index: number) => {
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
};

export default AnswerList;
