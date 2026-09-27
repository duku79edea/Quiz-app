export default function Button({onNavigate,currentIndex,onSubmit,canSubmit,isSubmitted,isLastQuestion,onFinish}) {
  return (
    <div className="btn">
      <button
        onClick={() => {if (currentIndex > 0) {onNavigate(currentIndex - 1);}}}
      >
        Prev
      </button>

      {isLastQuestion && isSubmitted ? (<button onClick={onFinish}>Finish Quiz</button>):(
      <button
        className="submit-button"
        onClick={() => onSubmit(currentIndex)}
        disabled={!canSubmit}
      >
        Submit
      </button>
     )}
     <button
        onClick={() => {
          if (currentIndex < 19) { onNavigate(currentIndex + 1);}}}>Next</button>
    </div>
  );
}