import useFetch from "../hook/useFetch"
import Card from "../components/card";
import { useEffect, useState } from "react";
import BASE_URL from "../config";
import UseTitle from "../hook/usetitle";

const ProductPage = () => {
    UseTitle("Properties")
    const {data:products, loading} = useFetch(`${BASE_URL}/products`);
    const [filter, setFilter] = useState([]);

    
  //load all products by default after fetch
    useEffect(() => {
        if(products && products.length > 0){
            setFilter(products)
        }
    }, [products])

    //filter products based on category
    function getCategory(category){
        const selecteCategories = products.filter((item) => item.category === category)
        setFilter(selecteCategories)
    }

    function getAll(){
        setFilter(products)
    }

    return ( 
        <section id="projects">
            <h1 className="product-heading">From Cozy Apartments to Luxury Estates — We’ve Got You Covered.</h1>
            <p className="product-subheading">At <span style={{color:"black", fontWeight:800}}>HomeHaven,</span> we believe your dream home should be just a click away. 
                That’s why our property display page is designed to make browsing simple, enjoyable, and transparent.</p>
                {loading && <p className="loader"><i class="bi bi-arrow-clockwise"></i></p>}
            <div className="products">
                <div className="category-cont">
                    <h2>Select Category</h2>
                    <div className="categories-btns">
                        <button className="active"  onClick={() => getAll()}>All</button>
                        <button onClick={() => getCategory("Residential")}>Residential</button>
                        <button  onClick={() => getCategory("Commercial")}>Commercial</button>
                        <button  onClick={() => getCategory("Land")}>Land</button>
                        <button  onClick={() => getCategory("House")}>House</button>
                    </div>
                </div>
               
                 <div className="product-cont">
                   {filter.map((item) => <Card key={item.id} item={item}/>)}
                  </div>
            </div>
           
        </section>
     );
}
 
export default ProductPage;