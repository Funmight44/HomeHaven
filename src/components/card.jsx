import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({item}) => {
    return ( 
        <div className="card">
            <div className="img-cont">
                {/* // If you need to, you can tweak the effect transition using the wrapper style. */}
             <Link to={`/property/${item.id}`}>  <LazyLoadImage alt={item.title} effect="blur"
                wrapperProps={{  style: {transitionDelay: "1s"}, }} src={item.image} /></Link>
               {/* <Link to={`/property/${item.id}`}><img loading="lazy"  src={item.image}  alt={item.title}/></Link>  */}
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