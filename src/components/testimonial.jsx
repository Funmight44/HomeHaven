import UseFetch from "../hook/useFetch"
import BASE_URL from "../config";

const Testimonial = () => {
    const { data: testimonials, loading } = UseFetch(`${BASE_URL}/testimonials`)

       if (!testimonials) return null; // or loading spinner

    return ( 
        <section className="testimonials-section" id="testimonial">
        <div className="testimonials-header">
            <h2 className="testimonials-heading">What Our Clients Say</h2>
            <p className="testimonials-sub">Real stories from people who found their perfect home with us.</p>
        </div>
        {loading && <p className="loader"><i class="bi bi-arrow-clockwise"></i></p>}
        {/* Desktop grid */}
        <div className="testimonials-grid" role="list">
            {testimonials.slice(0,6).map((testimonial) => (
                <article key={testimonial.id} className="testimonial-card" role="listitem">
                    <div className="testimonial-top">
                    <img src={testimonial.image} alt={`${testimonial.title} profile`} className="testimonial-avatar"/>
                    <div className="testimonial-meta">
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-location">{testimonial.location}</p>
                        <div className="testimonial-rating" aria-label={`Rating: ${testimonial.rating} out of 5`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={i < testimonial.rating ? "star filled" : "star"}>★</span>
                    ))}
                    </div>
                </div>
                </div>

                <p className="testimonial-feedback">“{testimonial.feedback}”</p>

                <div className="testimonial-date">{testimonial.date}</div>
            </article>))}
        
      </div>
        </section>
     );
}
 
export default Testimonial;