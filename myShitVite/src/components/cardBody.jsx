
const CardBody = ({desc,date,title,onDelete}) => {
    return(
        <div className="cardBody">
            <h3>{title}</h3>
            <p>{desc}</p>
            <button onClick={onDelete}>delete</button>
            <h5>{date}</h5>
        </div>
    )
}

export {CardBody}