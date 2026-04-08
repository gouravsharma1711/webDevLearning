import React, { useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCrown,
  FaAward,
  FaLightbulb
} from "react-icons/fa";
import modelsInfo from "../../utils/model";
import { useParams } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ModelPage = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const { artistId } = useParams();

  // 🔹 Efficient filtering using useMemo
  const modelInfo = useMemo(() => {
    if (!artistId) return null;
    return modelsInfo.find(model => model.id === artistId);
  }, [artistId]);

  useGSAP(() => {
    if (!modelInfo) return; // Wait until model data is available

    const ctx = gsap.context(() => {
      // 🔹 Hero Entrance Animation
      const heroTl = gsap.timeline();
      heroTl.from(".hero-main-img", { 
        scale: 1.2, 
        opacity: 0, 
        duration: 1.5, 
        ease: "power4.out" 
      })
      .from(".hero-content h1", { 
        y: 100, 
        opacity: 0, 
        duration: 1, 
        ease: "expo.out" 
      }, "-=0.8")
      .from(".hero-side-img", { 
        x: 50, 
        opacity: 0, 
        stagger: 0.2, 
        duration: 1, 
        ease: "power3.out" 
      }, "-=0.5");

      // 🔹 Stats Section Scroll Animation
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power2.out"
      });

      // 🔹 Section Titles & Content Fade-in
      const sections = [".achievements-section", ".vision-section", ".contact-section"];
      sections.forEach(section => {
        gsap.from(`${section} .section-header`, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });

        gsap.from(`${section} .section-content`, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      });

      // 🔹 Hero Parallax
      gsap.to(".hero-main-img", {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, pageRef);

    return () => ctx.revert();
  }, [modelInfo]); // Re-run animations if model data changes

  if (!modelInfo) {
    return (
      <div className="model-not-found" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', backgroundColor: '#000' }}>
        <h2>Artist not found</h2>
      </div>
    );
  }

  return (
    <div id="model-page" ref={pageRef}>
      {/* 1. Hero Section */}
      <section className="model-hero" ref={heroRef}>
        <div className="hero-bg-overlay"></div>
        <img src={modelInfo.images[0]} alt={modelInfo.name} className="hero-main-img" />
        
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-overline">Professional Model</span>
            <h1 className="model-name">{modelInfo.name}</h1>
            <div className="name-underline"></div>
          </div>
          
          <div className="hero-side-gallery">
            {modelInfo.images.slice(1, 4).map((img, idx) => (
              <div key={idx} className="hero-side-img-wrapper">
                <img src={img} alt="" className="hero-side-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="model-stats-section">
        <div className="stats-container">
          <div className="stats-header">
            <FaCrown className="header-icon" />
            <h2>The Profile</h2>
            <p className="description-text">{modelInfo.description}</p>
          </div>
          
          <div className="stats-grid">
            {Object.entries(modelInfo.stats).map(([key, value]) => (
              <div key={key} className="stat-item">
                <span className="stat-label">{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className="stat-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Achievements Section */}
      <section className="achievements-section">
        <div className="section-container">
          <div className="section-header">
            <FaAward className="header-icon" />
            <h2>Achievements</h2>
            <div className="title-divider"></div>
          </div>
          <div className="section-content">
            <ul className="achievement-list">
              {modelInfo.achievements.map((item, idx) => (
                <li key={idx}>
                  <span className="list-bullet"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Vision Section */}
      <section className="vision-section">
        <div className="section-container">
          <div className="section-header">
            <FaLightbulb className="header-icon" />
            <h2>My Vision</h2>
            <div className="title-divider"></div>
          </div>
          <div className="section-content">
            <p className="vision-text">"{modelInfo.vision}"</p>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>For bookings and collaborations</p>
          </div>
          <div className="section-content contact-grid">
            <a href={`https://instagram.com/${modelInfo.contact.instagram}`} target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaInstagram /> <span>{modelInfo.contact.instagram}</span>
            </a>
            <a href={`tel:${modelInfo.contact.phone}`} className="contact-link">
              <FaPhoneAlt /> <span>{modelInfo.contact.phone}</span>
            </a>
            <a href={`https://wa.me/${modelInfo.contact.whatsapp.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
            <a href={`mailto:${modelInfo.contact.email}`} className="contact-link">
              <FaEnvelope /> <span>{modelInfo.contact.email}</span>
            </a>
            <div className="contact-link">
              <FaMapMarkerAlt /> <span>{modelInfo.contact.location}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModelPage;
