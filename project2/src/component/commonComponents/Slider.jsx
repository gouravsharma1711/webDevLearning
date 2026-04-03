import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Slider() {
  const trackRef = useRef(null);

  const icons = Array(20).fill(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50, // move half (because we duplicate)
        duration: 10,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  });

  return (
    <div id="icon-slider" style={{ overflow: "hidden" }}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "40px",
          width: "max-content",
        }}
      >
        {/* 👇 duplicate for seamless loop */}
        {[...icons, ...icons].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: "40px", height: "40px" }}
          >
            <path d="M17 9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16C16.5523 4 17 4.44772 17 5V9.2Z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default Slider;