import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/all";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.header-text h1', {opacity:0, xPercent:-100}, {opacity: 1, xPercent:0, duration:1.8, ease: 'power1.inOut', stagger:0.02})
         gsap.fromTo('.header-text p', {opacity:0, yPercent:100}, {opacity: 1, yPercent:1, duration:1.8, ease: 'power1.inOut', stagger:0.02})

        // const timeline = gsap.timeline({
        //     scrollTrigger: { trigger: '.header-btns', duration:1.8, ease: 'power1.inOut', start: 'bottom bottom',
        //         end: 'center 50%'
        //     }
        // })
        
        gsap.fromTo('.header-btns button',{yPercent:100}, {yPercent:0, duration:1, ease: 'power1.inOut', delay:2})
    }, [])


    return ( 
        <section className="hero">
             <div className="header-text">
                <h1>Your Gateway to Dream Homes</h1>
                <p>Discover, Explore, and Find Your Perfect Property with Us</p>
                <div className="header-btns">
                    <Link to="/projects"><button>Projects</button></Link>
                    <Link to="/contact"><button className="contact-btn">Contact Us</button> </Link> 
                </div>
            </div>
        </section>
     );
}
 
export default Hero;