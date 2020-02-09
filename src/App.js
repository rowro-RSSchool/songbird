import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "./components/Header";
import Question from "./components/Question";
import AnswerList from "./components/AnswerList";
import BirdDescription from "./components/BirdDescription";
import NextQuestionButton from "./components/NextQuestionButton";
import birds from "./birds";
import EndGameMessage from "./components/EndGameMessage";

function App() {
  const [score, setScore] = useState(0);

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const [checkedAnswersIds, setCheckedAnswersIds] = useState([]);
  const [lastChangedQuestion, setLastChangedQuestion] = useState(null);

  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [isEndGame, setIsEndGame] = useState(false);

  const steps = [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие птицы',
    'Хищные птицы',
    'Морские птицы',
  ];

  const correctAnswerAudio = new Audio('/correct.wav');
  const wrongAnswerAudio = new Audio('/wrong.mp3');

  const answers = birds[activeStepIndex].map((item) => ({id: item.id, name: item.name}));

  const maxScore = birds.flat().length - birds.length;

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

  useEffect(() => {
    const randomIndex = getRandomNumber(0, birds[activeStepIndex].length);
    setActiveQuestion(birds[activeStepIndex][randomIndex]);
  }, [activeStepIndex, activeQuestionIndex]);


  const changeAnswer = (id) => {
    const isRightAnswer = id === activeQuestion.id;

    if (isRightAnswer) {
      correctAnswerAudio.play();
      setScore(score + (answers.length - checkedAnswersIds.length - 1));
      setIsLevelComplete(true);
    } else {
      wrongAnswerAudio.play();
    }

    if (!isLevelComplete) {
      setCheckedAnswersIds([...checkedAnswersIds, id]);
    }

    setLastChangedQuestion( birds[activeStepIndex].find((item) => item.id === id ));
  };

  const goToNextLevel = () => {
    if (activeStepIndex < steps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    } else {
      setActiveStepIndex(0);
      setIsEndGame(true);
    }

    setActiveQuestionIndex(getRandomNumber(0, birds[activeStepIndex].length));
    setActiveQuestion(birds[activeStepIndex][activeQuestionIndex]);

    setCheckedAnswersIds([]);
    setLastChangedQuestion(null);
    setIsLevelComplete(false);
  };

  return (
    <div className="app">
      <div className="grid">
        <Header score={score} steps={steps} activeStepIndex={activeStepIndex}/>

        { !isEndGame && activeQuestion &&
          <Question
            image={activeQuestion.image}
            name={activeQuestion.name}
            audio={activeQuestion.audio}
            isShowAnswer={isLevelComplete}
          />
        }

        { !isEndGame && activeQuestion &&
          <AnswerList
            answers={answers}
            rightAnswerId={activeQuestion.id}
            checkedAnswers={checkedAnswersIds}
            onChangeAnswer={changeAnswer}
          />
        }

        { (!isEndGame && lastChangedQuestion) ?
          <BirdDescription
            image={lastChangedQuestion.image}
            audio={lastChangedQuestion.audio}
            name={lastChangedQuestion.name}
            species={lastChangedQuestion.species}
            description={lastChangedQuestion.description}
          />
          : (!isEndGame) ?
            <div className="bird-description">
              Послушайте плеер и выберите птицу из списка
            </div>
          : <EndGameMessage score={score} maxScore={maxScore} onRetry={() => setIsEndGame(false)}/>
        }

        {!isEndGame &&
          <NextQuestionButton disabled={!isLevelComplete} onClick={goToNextLevel}/>
        }
      </div>
    </div>
  );
}

export default App;
