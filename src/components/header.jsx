import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Contact from "../pages/contact";
const Header = () => {
    const [showNav, setShowNav] = useState(false)
    const { isAuthenticated, user, loginWithRedirect, logout} = useAuth0();
   


    return ( 
        <>
        <header>
            <nav>
                <Link to="/"><div className="logo-cont">
                    <img src="/Estate-images/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg"/>
                    <h2>HomeHaven</h2>
                </div></Link>
                <div className={`nav-links ${showNav ? 'sideBar' : ''}`} onClick={() => setShowNav(false)}>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    {/* <a href="#about"><p>About</p></a>
                     <a href="#projects"><p>Projects</p></a>
                    <a href="#testimonial"><p>Testimonial</p></a> */}
                    {isAuthenticated && <h3>User: {user.name}</h3>}
                   
                </div>
                {isAuthenticated ? <button className="signUp-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign Out</button> 
                : <button className="signUp-btn" onClick={() => loginWithRedirect()}>Sign In</button>}

                <button className="showNav-btn" onClick={() => setShowNav(!showNav)}><i className="bi bi-list"></i></button>
            </nav>
            

            <div className="header-text">
                <h1>Your Gateway to Dream Homes</h1>
                <p>Discover, Explore, and Find Your Perfect Property with Us</p>
                <div className="header-btns">
                    <Link to="/projects"><button>Projects</button></Link>
                    <Link to="/contact"><button className="contact-btn">Contact Us</button> </Link> 
                </div>
            </div>
            
        </header>
        
     </>
     );
}
 
export default Header;