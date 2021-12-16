export default function Column(props) {
    return (
        <div className="column" >
            <img src={props.image} alt="" />
            <h2 className="ice-cream__name" >{props.name}</h2>
            <p className="ice-cream__text">{props.description}</p>
            <span className="ice-cream__price">${props.price}</span>
            <button type='button' onClick={() => {props.deleteFunction(props.id)}} className="delete-btn"><img src="img/icon-delete.jpg" alt=""/></button>
        </div>
    )
}