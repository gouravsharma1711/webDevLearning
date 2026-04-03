import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Team Member 1", role: "Creative Director", image: "/images/team1.png" },
  { name: "Team Member 2", role: "Production Head", image: "/images/team2.png" },
  { name: "Team Member 3", role: "Lead Stylist", image: "/images/team3.png" },
  { name: "Team Member 4", role: "Marketing Lead", image: "/images/team4.png" }
];

function TeamSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.from(el.querySelectorAll('.team-card'), {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      }
    });
  }, []);

  return (
    <section id="team-section" ref={sectionRef}>
      <div className="section-header">
        <span className="sub-title gold-text">The Experts</span>
        <h2 className="luxury-title">CREATIVE <span className="gold-text">TEAM</span></h2>
      </div>
      
      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="member-image">
              <img src={member.image} alt={member.name} />
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="gold-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
