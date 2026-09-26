import {quizData} from '../data/quizData'

export default function Explanation(){
    return (
        <div className='explanation'>
            <h3>Explanation</h3>
            <p>{quizData[0].explanation}</p>
        </div>
    )
}