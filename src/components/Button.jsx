export default function Button({ onNavigate, currentIndex }){
    return(
        <div className="btn">
            <button onClick={() => {if (currentIndex > 0)onNavigate(currentIndex - 1)}}>Prev</button>
            <button>Submit</button>
            <button onClick={() => {if (currentIndex < 19) onNavigate(currentIndex + 1)}}>Next</button>
        </div>
    )
}