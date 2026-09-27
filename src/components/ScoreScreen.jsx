export default function ScoreScreen({ finalScore, onRestart }) {
  return (

    <div className="score-screen">
      <div className="Gad-wants">
        <h2>Quiz Completed</h2>
        <p>You Scored: {finalScore}/20</p>

        <button className="restart-button" onClick={onRestart}>Restart Quiz</button>
      </div>
    </div>
  )
}