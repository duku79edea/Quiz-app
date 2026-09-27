export default function Navigation({ quizData, currentIndex, userAnswers, onNavigate }){
    return (
        <div className="question-nav">
            <div className="nav-header">
                <h3>Question {currentIndex + 1} / {quizData.length || 20}</h3>
                <a href="#" className="help-link">Need help?</a>
            </div>
            <div className="btn-nav">
                {quizData.map((question, index) => {

                    let statusClass = "unanswered";
                    if (index === currentIndex) statusClass = 'current';
                    else if (userAnswers[index] !== undefined) statusClass = 'answered';

                    return (

                        <button key={index} className={statusClass}
                            onClick={() => onNavigate(index)}>
                            {index + 1}
                        </button>
                    )
                })}
                
            </div>
        </div>
    )
}