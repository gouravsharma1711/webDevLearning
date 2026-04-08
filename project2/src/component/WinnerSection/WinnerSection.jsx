import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WinnerSection = ({ title = "GRAND FINALE", subtitle = "The Hall of Fame", winners = [] }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  
  // Normalize winners data to an array if an object is passed
  const winnersArray = Array.isArray(winners) ? winners : Object.values(winners);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 🔹 Initial States
      gsap.set([".overline", ".section-title", ".title-flourish"], {
        opacity: 0,
        y: 30,
      });

      gsap.set(".royal-winner-card", {
        opacity: 0,
        y: 60,
        scale: 0.95,
      });

      // 🔥 Main entrance timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(".overline", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .to(".section-title", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "expo.out",
      }, "-=0.3")
      .to(".title-flourish", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
      }, "-=0.4")
      .to(".royal-winner-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15, // 🔹 Faster stagger for more cards
        ease: "power3.out",
      }, "-=0.2");

      // 🔥 Subtle background parallax
      gsap.to(".section-decoration-left", {
        y: -150,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".section-decoration-right", {
        y: 150,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // 🔥 Gentle floating animation for cards (reduced intensity)
      gsap.to(".royal-winner-card", {
        y: "-=10",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.4,
          from: "random"
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [winnersArray]);

  return (
    <section id="winner-section" ref={sectionRef}>
      <div className="section-decoration-left"></div>
      <div className="section-decoration-right"></div>

      <header className="winner-header">
        <span className="overline">{subtitle}</span>
        <h1 className="section-title">{title}</h1>
        <div className="title-flourish"></div>
      </header>

      <div className="winners-container" ref={containerRef}>
        {winnersArray.map((winner, index) => (
          <div key={index} className="royal-winner-card">
            <div className="card-inner-flip">
              {/* Front Side */}
              <div className="card-face card-front">
                <div className="corner-flourish top-left"></div>
                <div className="corner-flourish top-right"></div>
                <div className="corner-flourish bottom-left"></div>
                <div className="corner-flourish bottom-right"></div>
                
                <div className="card-image">
                  <img src={winner.image || "/images/placeholder.jpg"} alt={winner.name} />
                  <div className="image-overlay"></div>
                </div>
                <div className="card-content">
                  <h2 className="winner-name">{winner.name}</h2>
                  <p className="winner-year">{winner.year || "2024"}</p>
                </div>
              </div>

              {/* Back Side */}
              <div className="card-face card-back">
                <div className="corner-flourish top-left"></div>
                <div className="corner-flourish top-right"></div>
                <div className="corner-flourish bottom-left"></div>
                <div className="corner-flourish bottom-right"></div>

                <div className="back-content">
                  <h3 className="back-title">{winner.name}</h3>
                  <div className="divider-flourish"></div>
                  <p className="winner-description">
                    {winner.description || "Celebrating excellence and timeless elegance in the heart of Filmiagi's grand showcase."}
                  </p>
                  <button className="read-more-btn">
                    <span>READ MORE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinnerSection;
