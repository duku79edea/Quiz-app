import {useMemo} from 'react'
function QuestionCard( { question } ){
    
    function orderArray (arr){
        const order = [...arr];
        for(let i = order.length-1; i>0; i--){
            const j = Math.floor(Math.random() * (i+1))
            [order[i], order[j]] = [order[j], order[i]]
        }
        return order;
    }

    const orderOptions = useMemo (
        () => orderArray(question.options), [question]
    )
    return (
        <div>
          {orderOptions.map(option =>
        <button key={option}>{option}</button>)}  
        </div>
    )
}
export default QuestionCard