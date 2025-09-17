import { useEffect, useState } from "react";
import PropertyDetailCard from "../components/propertyDetailCard";
import { useParams } from "react-router-dom";
import BASE_URL from "../config";

const PropertyDetails = () => {
    const [property, setProperty] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const {id} = useParams()


   useEffect(() => {
  
            async function getPropertyDetails() {
              try{
                  const response = await fetch(`${BASE_URL}/products/${id}`);
                  if (!response.ok) throw new Error("Failed to fetch property details");
                  const data = await response.json();
                  setProperty(data)
                  setLoading(false);
                  console.log(data)
              }catch(error){
                setError(error.message)
              }
            }
                getPropertyDetails();
   }, [id])



    return ( 
        <section >
              {loading && <p className="loader"><i class="bi bi-arrow-clockwise"></i></p>}
              {error && <p>{error}</p>}
              {<PropertyDetailCard property={property}/>} 
        </section>
     );
}
 
export default PropertyDetails;