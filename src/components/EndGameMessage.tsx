import React, {MouseEventHandler} from "react";
import "./EndGameMessage.scss"

interface EndGameMessageProps {
  score: number,
  maxScore: number,
  onRetry: MouseEventHandler,
}

const EndGameMessage: React.FC<EndGameMessageProps> = ({score, maxScore, onRetry}) => {
  const isWin = score === maxScore;

  return (
    <div className="end-game-message">
      <div className="end-game-message__title">
        Поздравляем!
      </div>
      <div className="end-game-message__description">
        {(isWin) ? (
          <p>
            Вы ответили на все вопросы правильно!<br/>
            Теперь вы можете попробовать стать ведущим передачи "В мире животных":)
          </p>
        ) : (
          <p>Вы завершили викторину и набрали {score} баллов из {maxScore} возможных.</p>
        )}
      </div>
      <button className="end-game-message__retry-btn" onClick={onRetry}>Попробовать ещё раз!</button>
    </div>
  );
};

export default EndGameMessage;
