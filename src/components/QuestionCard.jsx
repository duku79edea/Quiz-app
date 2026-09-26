import {useMemo} from 'react'
function QuestionCard ({ question, questionIndex, onAnswer, selectedAnswer }) {

    
    function orderArray (arr){
        const order = [...arr];
        for(let i = order.length-1; i>0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [order[i], order[j]] = [order[j], order[i]];
        }
        return order;
    }

    const orderOptions = useMemo (
        () => orderArray(question.options), [question]
    )
    return (
        <div className='questions'>
            <div className="qn-card">
                <h3>Question {questionIndex + 1}</h3>
                <p>{question.question}</p>
            </div>
            <div className="options">
                {orderOptions.map(option => <p className='option-text' key={option} onClick={() => onAnswer(questionIndex, option)}>{option}</p>)}  
            </div>
          
        </div>
    )
}
export default QuestionCard