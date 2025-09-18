import About from "../components/about";
import Products from "../components/products";
import Testimonial from "../components/testimonial";
import UseTitle from "../hook/usetitle";
import Contact from "./contact";

const Homepage = () => {
    UseTitle("Home")
    return ( 
        <>
            <About/>
            <Products/>
            <Testimonial/>
            <Contact/>
        </>
     );
}
 
export default Homepage;