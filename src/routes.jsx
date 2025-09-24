import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


// import Homepage from "./pages/homePage"
// import ProductPage from "./pages/propertyPage";
// import PropertyDetails from "./pages/propertyDetail";
// import Contact from "./pages/contact";
//lazy loading
const Homepage = lazy(() => import("./pages/homePage"));
const ProductPage = lazy(() => import("./pages/propertyPage"));
const PropertyDetails = lazy(() => import("./pages/propertyDetail"));
const Contact = lazy(() => import("./pages/contact"));

const AllRoutes = () => {
    return ( 
        <Suspense fallback={<div className="loader"><i className="bi bi-arrow-clockwise"></i></div>}>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/projects" element={<ProductPage/>}/>
                <Route path="/property/:id" element={<PropertyDetails/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Suspense>
     );
}
 
export default AllRoutes;