import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TeamCard from "../commonComponents/TeamCard.jsx";

gsap.registerPlugin(ScrollTrigger);

function TeamSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      
      // 🔹 Set initial state (prevents flicker)
      gsap.set([
        ".overline",
        ".section-title",
        ".title-flourish",
        ".royal-team-card"
      ], {
        opacity: 0,
        y: 40
      });

      // 🔥 Main timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        }
      });

      // 🔹 Header animation
      tl.to(".overline", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })

      .to(".section-title", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out"
      }, "-=0.5")

      .to(".title-flourish", {
        opacity: 1,
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")

      // 🔹 Cards animation (premium feel)
      .to(".royal-team-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: {
          amount: 0.6,
          ease: "power2.out"
        },
        ease: "expo.out"
      }, "-=0.4");


      // 🔥 Subtle parallax effect
      gsap.to(".section-decoration-left", {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(".section-decoration-right", {
        y: 50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section id="team-section" ref={sectionRef}>
      <div className="section-decoration-left"></div>
      <div className="section-decoration-right"></div>
      
      <header className="section-header">
        <span className="overline">OUR EXCLUSIVE FAMILY</span>
        <h1 className="section-title">MEET THE LEADERSHIP</h1>
        <div className="title-flourish"></div>
      </header>

      <div id="team-cards-container">
        <TeamCard
          name="Mrs. Tarushi"
          role="Manager"
          image="/images/teamMember1.jpeg"
        />
        <TeamCard
          name="Miss Akanksha"
          role="Co-Founder"
          image="/images/teamMember2.jpeg"
        />
      </div>
    </section>
  );
}

export default TeamSection;