



function Card(props) {
    
    return (
        <div>
            <h4>{props.name}</h4>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

export default Card