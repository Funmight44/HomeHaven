const PropertyDetailCard = ({property}) => {
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
               <a href="#contact"> <button>Contact Agent</button></a>
            </div>
        </div>
     );
}
 
export default PropertyDetailCard;
