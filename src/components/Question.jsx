import {quizData} from '../data/quizData'

export default function Question(){
    return (
        <div className='questions'>
            <div className='qn-card'>
                <h3>Question 1</h3>
                <p>{quizData[0].question}</p>
            </div>
            <div className='options'>
                {quizData[0].options
                .map((option, index) =>( 
                    <p className='option-text' key={index}>{option}</p>
                ))
            }
            </div>
        </div>
    )
}