export default function Button({onNavigate,currentIndex,onSubmit,canSubmit,isSubmitted,isLastQuestion,onFinish}) {
  return (
    <div className="btn">
      <button
        className="prev-btn"
        onClick={() => {if (currentIndex > 0) {onNavigate(currentIndex - 1);}}}
      >
        Prev
      </button>

      {isLastQuestion && isSubmitted ? (<button className="finish-button" onClick={onFinish}>Finish Quiz</button>):(
      <button
        className="submit-button"
        onClick={() => onSubmit(currentIndex)}
        disabled={!canSubmit}
      >
        Submit
      </button>
     )}
     <button
        className="next-btn"
        onClick={() => {
          if (currentIndex < 19) { onNavigate(currentIndex + 1);}}}>Next</button>
    </div>
  );
}