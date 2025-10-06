import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
            useGSAP(() => {
            gsap.fromTo('.property-detail-info', {opacity:0, duration:1, xPercent: 100}, 
            {opacity:1, duration:1.8, xPercent:0, ease: 'power1.inOut', stagger: 0.02})

             gsap.fromTo('.property-detail-card img', {opacity:0, duration:1, xPercent: -100}, 
            {opacity:1, duration:1.8, xPercent:0, ease: 'power1.inOut', stagger: 0.02})
        })
    return ( 
        <section id="about">
            <h1 className="about-heading">About <span>Us</span> </h1>
            <div className="about">
                <div className="about-img">
                    <img src="/Estate-images/frames-for-your-heart-vbSRUrNm3Ik-unsplash.jpg" alt="about us"/>
                </div>
                <div className="about-text">
                    <h2>Your Trusted Partner in Real Estate</h2>
                    <p>At <span>HomeHaven</span>, we are dedicated to helping you find your dream property with ease and confidence. 
                        With a vast selection of residential, commercial, and land properties, we cater to diverse needs and preferences.
                         Our user-friendly platform allows you to explore listings, filter by categories, and connect with trusted agents. Whether you're buying, selling,
                          or renting, our team of experienced professionals is here to guide you every step of the way. Experience seamless property transactions and 
                          exceptional customer service with <span>HomeHaven</span> – your gateway to dream homes.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </section>
     );
}
 
export default About;