import quizData from '../data/quizData';

export default function Explanation({ currentIndex }) {
  return (
    <div className="explanation">
      <h3>Explanation</h3>
      <p>{quizData[currentIndex].explanation}</p>
    </div>
  );
}
