import About from "../components/about";
import Products from "../components/products";
import Testimonial from "../components/testimonial";
import UseTitle from "../hook/usetitle";

const Homepage = () => {
    UseTitle("Home")
    return ( 
        <>
            <About/>
            <Products/>
            <Testimonial/>
        </>
     );
}
 
export default Homepage;