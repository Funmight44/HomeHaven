import { lazy, Suspense } from "react";
// import About from "../components/about";
// import Products from "../components/products";
// import Testimonial from "../components/testimonial";
import UseTitle from "../hook/usetitle";
import Hero from "../components/hero";

const About = lazy(() => import("../components/about"))
const Products = lazy(() => import("../components/products"))
const Testimonial = lazy(() => import("../components/testimonial"))

const Homepage = () => {
    UseTitle("Home")
    return ( 
           <Suspense fallback={<p className="loader"><i class="bi bi-arrow-clockwise"></i></p>}>
              <Hero/>
              <About/>
               <Products/>
               <Testimonial/>
           </Suspense> 
     );
}
 
export default Homepage;