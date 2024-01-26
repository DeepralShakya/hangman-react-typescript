import '../App.css'

const KEYS = [
                "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
            ]

export function Keyboard(){
    return (
    <div>
        {KEYS.map(key => {
            return (
            <button className="keyboard" key={key}>{key}</button>
            )
        })}
    </div>
    )
}