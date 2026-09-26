
import Header from "./components/Header"
import Question from "./components/Question"
import Button from "./components/Button"
import Explanation from "./components/Explanation"
import Navigation from "./components/Navigation"
import './App.css'

export default function App(){
  return (
    <div className="quiz-interface">
      <div className="question-interface">
        <Header />
        <Question />
        <Button />
        <Explanation />
      </div>
      <Navigation />
   </div>
  )
}