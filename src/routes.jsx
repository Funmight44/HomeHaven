import { Route, Routes } from "react-router-dom";


import Homepage from "./pages/homePage"
import ProductPage from "./pages/propertyPage";
import PropertyDetails from "./pages/propertyDetail";
import Contact from "./pages/contact";

const AllRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/products" element={<ProductPage/>}/>
            <Route path="/property/:id" element={<PropertyDetails/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
     );
}
 
export default AllRoutes;