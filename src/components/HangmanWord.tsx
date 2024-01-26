export function HangmanWord(){
    const word = "test"
    const guessedLetters = ["t", "s" , "e "]
    return (
        <div style={{ marginBottom:"10px", display:'flex', gap:".25em", fontSize:"6rem", textTransform:"uppercase", fontFamily:"sans-serif", fontWeight:"bold", marginTop:"320px"}}>
            {word.split("").map((letter, index) => (
                <span style={{borderBottom: ".1em solid black"}} key={index}>
                    <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}}> 
                        {letter}
                    </span>
                </span>
            ))}

        </div>
    )
    
}