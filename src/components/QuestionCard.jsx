import {useMemo} from 'react'
function QuestionCard ({ question, questionIndex, onAnswer, selectedAnswer, isSubmitted }) {

    function getOptionClass (option) {
        if (!isSubmitted) {
            return option === selectedAnswer ? "selected" : "";
        }
        if (option === question.correctAnswer) return "correct";
        if (option === selectedAnswer) return "incorrect";
        return "";
    }

    return (
        <div className='questions'>
            <div className="qn-card">
                <h3>Question {questionIndex + 1}</h3>
                <p>{question.question}</p>
            </div>
            <div className="options">
                {question.options.map(option => <p className={`option-text ${getOptionClass(option)}`} key={option} onClick={() => !isSubmitted && onAnswer(questionIndex, option)}>{option}</p>)}  
            </div>
          
        </div>
    )
}
export default QuestionCard