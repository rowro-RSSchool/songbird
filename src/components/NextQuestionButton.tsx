import React, {MouseEventHandler} from "react";
import './NextQuestionButton.scss'

interface NextQuestionButtonProps {
  disabled: boolean,
  onClick: MouseEventHandler
}

const NextQuestionButton: React.FC<NextQuestionButtonProps> = ({disabled, onClick}) => {
  return (
    <button
      className="next-question-button"
      disabled={disabled}
      onClick={onClick}
    >Next Level</button>
  );
};

export default NextQuestionButton;
