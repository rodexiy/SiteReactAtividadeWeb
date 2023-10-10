import "./Card.css"


function Card(props) {
    return (
        <>
            <div>
                <img className="cardImage" src={props.image}>
                </img>
                <p className="cardLocal">{props.local}</p>
            </div>
        </>
    )
}

export default Card