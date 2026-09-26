import {quizData} from '../data/quizData'

export default function Explanation(){
    return (
        <div className='explanation'>
            <p>{quizData[0].explanation}</p>
        </div>
    )
}