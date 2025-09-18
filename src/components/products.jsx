import useFetch from "../hook/useFetch"
import Card from "./card";
import BASE_URL from "../config"
import UseTitle from "../hook/usetitle";


const Products = () => {
    UseTitle("Projects")
    const {data:products, loading, error} = useFetch(`${BASE_URL}/products`);
    
    return ( 
        <section id="projects">
            <h1 className="product-heading">Explore Beautiful Homes, Tailored for You</h1>
            <p className="product-subheading">Discover a curated selection of properties that match your unique style and needs. Your dream home is just a click away.</p>
            {loading && <p className="loader"><i class="bi bi-arrow-clockwise"></i></p>}
            {error && <p className="error">{error}</p>}
                 <div className="product-cont">
                     {products.slice(7, 13).map((item) => <Card key={item.id} item={item}/>)}
                 </div>
        </section>
     );
}
 
export default Products;