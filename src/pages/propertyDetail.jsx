import { Suspense, useEffect, useState, lazy } from "react";
// import PropertyDetailCard from "../components/propertyDetailCard";
import { useParams } from "react-router-dom";
import BASE_URL from "../config";
import UseTitle from "../hook/usetitle";

const PropertyDetails = () => {
  UseTitle("Property Details")
    const [property, setProperty] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const {id} = useParams()
    UseTitle("Property Details")

    //react optimation using react lazy load
    const PropertyDetailCard = lazy(() => import('../components/propertyDetailCard'))

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
                setLoading(false)
              }
            }
                getPropertyDetails();
   }, [id])



    return ( 
        <section >
              {error && <p>{error}</p>}
              {!loading && !error && (
                <Suspense fallback={<p className="loader"><i class="bi bi-arrow-clockwise"></i></p>}>
                   <PropertyDetailCard property={property} />
                </Suspense>
              )}
              
        </section>
     );
}
 
export default PropertyDetails;