import {quizData} from '../data/quizData'

export default function Question(){
    return (
        <div>
            <h3>Question 1</h3>
            <p>{quizData[0].question}</p>
            <div className='options'>
                {quizData[0].options
                .map((option, index) =>( 
                    <div className='Option' key={index}>
                        <span className='option-text'>{option}</span>
                    </div>
                ))
            }
            </div>
        </div>
    )
}