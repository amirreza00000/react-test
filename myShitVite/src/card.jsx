import {CardHeader} from './components/cardHeader.jsx'
import {CardBody} from './components/cardBody.jsx'

const Card = ({title,desc,date,onDelete}) => {
    return(
        <div className="card" >
            <CardHeader/>
            <CardBody onDelete={onDelete} date={date} desc={desc} title={title}/>
        </div>
    )
}







export {Card}