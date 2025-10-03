import { Link } from "react-router-dom";
import gsap from "gsap";

const PropertyDetailCard = ({property}) => {
    gsap.fromTo('.property-detail-info', {opacity:0, duration:1, xPercent: 100}, 
        {opacity:1, duration:1.8, xPercent:0, ease: 'power1.inOut', stagger: 0.02})

    gsap.fromTo('.property-detail-card img', {opacity:0, duration:1, xPercent: -100}, 
        {opacity:1, duration:1.8, xPercent:0, ease: 'power1.inOut', stagger: 0.02})


    return ( 
        <div className="property-detail-card">
            <img src={property.image} alt="property image" />
            <div className="property-detail-info">
                <h2>{property.title}</h2>
                <div>
                    <p style={{color:"black"}}>Price: ${property.price}</p>
                    <p>Location: {property.location}</p>
                    <p>status: {property.status}</p>
                </div>
                <p>{property.description}</p>
                {/* <div className="property-features">
                    <span>Bedrooms: {property.features.bedrooms}</span>
                    <span>Bathrooms: {property.features.bathrooms}</span>
                    {property.features.furnished ? <span>Furnished</span> : <span>Unfurnished</span>}
                </div> */}
               <Link to="/contact"><button>Contact Agent</button></Link>
            </div>
        </div>
     );
}
 
export default PropertyDetailCard;
