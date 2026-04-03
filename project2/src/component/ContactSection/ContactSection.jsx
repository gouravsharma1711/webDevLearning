import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        
        gsap.from(el.querySelector('.contact-info'), {
            x: -50,
            opacity: 0,
            duration: 1.2,
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
            }
        });

        gsap.from(el.querySelector('.contact-form'), {
            x: 50,
            opacity: 0,
            duration: 1.2,
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
            }
        });
    }, []);

    return (
        <section id="contact-section" ref={sectionRef}>
            <div className="contact-container">
                <div className="contact-info">
                    <h4 className="gold-text">Get In Touch</h4>
                    <h2>Let's Create <br /><span className="gold-text">Magic Together</span></h2>
                    <p>Have an inquiry or want to collaborate? Reach out to us and our team will get back to you shortly.</p>
                    
                    <div className="contact-details">
                        <div className="detail-item">
                            <i className="fas fa-map-marker-alt gold-text"></i>
                            <div>
                                <h4>Location</h4>
                                <p>Lucknow, Uttar Pradesh, India</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-phone-alt gold-text"></i>
                            <div>
                                <h4>Call Us</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-envelope gold-text"></i>
                            <div>
                                <h4>Email</h4>
                                <p>contact@filmiagi.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <select required>
                                <option value="" disabled selected>Interested In</option>
                                <option value="modeling">Modeling</option>
                                <option value="production">Production</option>
                                <option value="sponsorship">Sponsorship</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="gold-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
