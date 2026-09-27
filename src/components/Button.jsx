export default function Button({ onNavigate, currentIndex, onSubmit, canSubmit }){
    return(
        <div className="btn">
            <button onClick={() => {(currentIndex > 0) && onNavigate(currentIndex - 1)}}>Prev</button>
            <button onClick={() => onSubmit(currentIndex)} disabled={!canSubmit}>Submit</button>
            <button onClick={() => {(currentIndex < 19) && onNavigate(currentIndex + 1)}}>Next</button>
        </div>
    )
}