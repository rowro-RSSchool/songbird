import React from "react";
import './NextQuestionButton.scss'

function NextQuestionButton({ disabled, onClick }) {
  return (
    <button
      className="next-question-button"
      disabled={disabled}
      onClick={onClick}
    >Next Level</button>
  );
}

export default NextQuestionButton;
