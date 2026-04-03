import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const winners = [
    { name: "Winner 2023", category: "Mr. Lucknow", image: "/images/winner1.png" },
    { name: "Winner 2023", category: "Mrs. Lucknow", image: "/images/winner2.png" },
    { name: "Winner 2023", category: "Fashion Icon", image: "/images/winner3.png" }
];

function WinnerSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        gsap.from(el.querySelectorAll('.winner-card'), {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
            }
        });
    }, []);

    return (
        <section id="winner-section" ref={sectionRef}>
            <div className="section-header">
                <span className="sub-title gold-text">Hall of Fame</span>
                <h2 className="luxury-title">RECENT <span className="gold-text">WINNERS</span></h2>
            </div>
            <div className="winner-grid">
                {winners.map((winner, index) => (
                    <div className="winner-card" key={index}>
                        <div className="winner-image">
                            <img src={winner.image} alt={winner.name} />
                            <div className="winner-overlay">
                                <h3>{winner.name}</h3>
                                <p className="gold-text">{winner.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WinnerSection
