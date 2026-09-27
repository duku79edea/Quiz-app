import { useState } from 'react';

import quizData from './data/quizData'
import QuestionCard from './components/QuestionCard';
import Header from "./components/Header"
import Button from "./components/Button"
import Explanation from "./components/Explanation"
import Navigation from "./components/Navigation"
import './App.css'

export default function App(){

  const [userAnswers, setUserAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submittedAnswers, setSubmittedAnswers] = useState({});

  function handleAnswer (questionIndex, selectedOption) {
    setUserAnswers((prev) => ({...prev, [questionIndex] : selectedOption}))
  }

  function handleSubmit (questionIndex) {
    if (userAnswers[questionIndex] === undefined) return;
    setSubmittedAnswers( (prev) => ({...prev, [questionIndex]: true})); 
  }

  function calculateScore (quizData, userAnswers) {
    let score = 0;
    quizData.forEach((question, i) => {
      if (userAnswers[i] === question.correctAnswer) {
        score += 1
      }
    })
    return score;
  }

  const finalScore = calculateScore(quizData, userAnswers);

  

  function onNavigate(index) {
    setCurrentIndex(index);
  }

    return (
      <div className="quiz-interface">
        <div className="question-interface">
          <Header />

          <QuestionCard question={quizData[currentIndex]}
            questionIndex = {currentIndex}
            onAnswer = {handleAnswer}
            selectedAnswer = {userAnswers[currentIndex]}
            isSubmitted={!!submittedAnswers[currentIndex]}
          />

          <Button onNavigate={onNavigate} currentIndex={currentIndex} onSubmit={handleSubmit} canSubmit={userAnswers[currentIndex] !== undefined && !submittedAnswers[currentIndex]} />

          <Explanation currentIndex={currentIndex} question={quizData[currentIndex]} isSubmitted={!!submittedAnswers[currentIndex]}/>

        </div>

        <Navigation quizData={quizData} currentIndex={currentIndex} userAnswers={userAnswers} onNavigate={onNavigate}/>

     </div>
    )
}