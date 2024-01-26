import "../App.css"

const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "60px",
        right: "132px"
    }}/>
)

const BODY = (
    <div style={{
        width: "10px",
        height: "120px",
        background: "black",
        position: "absolute",
        top: "125px",
        right: "160px",
    }}/>
)

const RIGHT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "162px",
        right: "70px",
        rotate: "30deg"
    }}/>
)

const LEFT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "162px",
        right: "160px",
        rotate: "-30deg"
    }}/>
)

const RIGHT_LEG = (
    <div style={{
        width: "90px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "275px",
        right: "96px",
        rotate: "60deg"
    }}/>
)

const LEFT_LEG = (
    <div style={{
        width: "90px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "275px",
        right: "144px",
        rotate: "-60deg"
    }}/>
)

export function HangmanDrawing(){
    return (
    <div className="drawing">
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}
        <div className="flatbar">
            <div className="straightline">
            
            </div>
        </div>
    </div>
    )
}