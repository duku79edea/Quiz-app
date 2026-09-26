import {quizData} from '../data/quizData'

export default function Explanation(){
    return (
        <div>
            <p>{quizData[0].explanation}</p>
        </div>
    )
}