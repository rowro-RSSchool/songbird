import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header";
import Question from "./components/Question";
import AnswerList from "./components/AnswerList";
import BirdDescription from "./components/BirdDescription";
import NextQuestionButton from "./components/NextQuestionButton";
import birdsData from "./birds";

function App() {
  const [birds, setBirds] = useState(birdsData);
  const [score, setScore] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeQuestionId, setActiveQuestionId] = useState(1);
  const [isRightAnswer, setIsRightAnswer] = useState(false);

  const steps = [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие птицы',
    'Хищные птицы',
    'Морские птицы',
  ];

  const answers = birds[activeStepIndex].map((item) => item.name);
  const activeQuestion = birds[activeStepIndex][activeQuestionId];

  return (
    <div className="app">
      <div className="grid">
        <Header score={score} steps={steps} activeStepIndex={activeStepIndex}/>

        <Question
          image={activeQuestion.image}
          name={activeQuestion.name}
          audio={activeQuestion.audio}
          isRightAnswer={isRightAnswer}
        />

        <AnswerList answers={answers}/>

        <BirdDescription
          image={activeQuestion.image}
          audio={activeQuestion.audio}
          name={activeQuestion.name}
          species={activeQuestion.species}
          description={activeQuestion.description}
        />

        <NextQuestionButton/>
      </div>
    </div>
  );
}

export default App;
