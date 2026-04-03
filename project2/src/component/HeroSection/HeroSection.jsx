import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroSection() {
  const main = useRef(null);

  useGSAP(
    () => {
      // 1. Initial Entrance Animation
      const tlEntrance = gsap.timeline();

      tlEntrance
        .from("#hero-text-section h3", {
          y: 30,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
        })
        .from(
          "#hero-text-section h1",
          {
            y: 100,
            opacity: 0,
            stagger: 0.15,
            duration: 1.5,
            ease: "expo.out",
          },
          "-=1",
        )
        .from(
          ".event-card",
          {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 1.2,
            ease: "expo.out",
          },
          "-=1.2",
        )
        .from(
          "#hero-text-section button",
          {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
          },
          "-=1",
        )
        .from(
          "#hero-text-section > h4",
          {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.8",
        );

    },
    { scope: main },
  );

  return (
    <section id="hero-section" ref={main}>
      <video src="/videos/hero-section2.MP4" muted autoPlay loop></video>
      <div id="transparent-Layer"></div>
      <div id="hero-text-section">
        <h3>A World Of Luxury</h3>
        <h1>FILMIAGI</h1>
        <h1>PRODUCTION</h1>
        <div id="event-section">
          <div id="event-section1" className="event-card">
            <h4>TRADEMARK EVENT</h4>
            <h2>Mr. Miss & Mrs LUCKNOW</h2>
          </div>
          <div id="event-section2" className="event-card">
            <h4>SIGNATURE SHOW</h4>
            <h2>FILMIAGI FASHION WEEK</h2>
          </div>
        </div>
        <button>EXPLORE MORE</button>
        <h4>SCROLL TO EXPLORE</h4>
      </div>
      
    </section>
      
  );
}

export default HeroSection;
