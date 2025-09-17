import { Link } from "react-router-dom";

const Card = ({item}) => {
    return ( 
        <div className="card">
            <div className="img-cont">
               <Link to={`/property/${item.id}`}><img src={item.image}  alt={item.title}/></Link> 
            </div>

            <div className="card-text">
                <h3>{item.title}</h3>
                <p><i className="bi bi-geo-alt"></i> {item.location} || <span>{item.price}</span></p>
               <Link to={`/property/${item.id}`}> <button>View Details</button></Link>
            </div>
        </div>
     );
}
 
export default Card;