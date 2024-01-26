import "../App.css"

const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "90px",
    }}/>
)

const BODY = (
    <div style={{
        width: "10px",
        height: "120px",
        background: "black",
        position: "absolute",
        top: "118px",
        right: "120px",
    }}/>
)

const RIGHT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "30px",
        rotate: "30deg"
    }}/>
)

const LEFT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "120px",
        rotate: "-30deg"
    }}/>
)

const RIGHT_LEG = (
    <div style={{
        width: "90px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "270px",
        right: "57px",
        rotate: "60deg"
    }}/>
)

const LEFT_LEG = (
    <div style={{
        width: "90px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "270px",
        right: "103px",
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