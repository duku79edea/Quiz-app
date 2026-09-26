import { useState } from 'react';
import quizData from './quizData'
import QuestionCard from './QuestionCard';

export default function Logic(){

  const [userAnswers, setUserAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleAnswer (questionIndex, selectedOption) {
    setUserAnswers((prev) => ({...prev, [questionIndex] : selectedOption}))
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


  return (
    <QuestionCard question={quizData[currentIndex]}
      questionIndex = {currentIndex}
      onAnswer = {handleAnswer}
      selectedAnswer = {userAnswers[currentIndex]}
   />
  )
}