import { useState} from "react";
import UseTitle from "../hook/usetitle";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";




const Contact = () => {
  UseTitle("Contact")
    const [result, setResult] = useState("");
      const [emailError, setEmailError] = useState("");
      const {isAuthenticated, loginWithRedirect} = useAuth0();
      const location = useLocation();

      function validateEmail(email) {
        const regress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regress.test(String(email).toLowerCase());
      }

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        setEmailError("")
        const formData = new FormData(event.target);
        const email = formData.get("email");

        if(!validateEmail(email)){
          setEmailError("Please enter a valid email address");
          setResult("")
          return;
        }
    
        formData.append("access_key", "39cacce3-4b3e-4c6c-a5f5-176459dbb196");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

       if (!isAuthenticated) {
          return (
            <section className="modal-overlay">
              <div className="contact">
                <div className="content">
                  <h3>Access Denied</h3>
                  <p style={{maginBottom: "20px"}}>You must be signed in to access the Contact page.</p>
                  <button onClick={() => loginWithRedirect({ appState: { returnTo: location.pathname }})}>Sign In</button>
                </div>
              </div>
            </section>
          );
       }

   return (  
        <section className="modal-overlay">
            <div className="contact">
                <div className="content">
                    <h3>Contact</h3>
                    <form onSubmit={onSubmit}>
                        <input type="text" name="name" placeholder="Name" required/>
                        <input type="email" name="email" placeholder="Email Address" required/>
                        {emailError && <span className="error">{emailError}</span>}
                        <input type="text" name="subject" placeholder="Enter your Subject" required/>
                        <textarea type="text" name="message" placeholder="Enter Your message" required/>
                        <button type="submit">Send</button>
                        <span>{result}</span>
                   </form>
                </div>
            </div>
        </section>
        
  
    );
} 
 
export default Contact;