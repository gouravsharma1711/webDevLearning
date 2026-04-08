import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  {
    name: "Home",
    to: "/#home",
  },
  {
    name: "Visionary",
    to: "/#Visionary",
  },
  {
    name: "Team",
    to: "/#team",
  },
  {
    name: "Spotlight",
    to: "/#spotlight",
  },
  {
    name: "Highlights",
    to: "/#highlights",
  },
  {
    name: "Latest",
    to: "/#latest",
  },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useGSAP(
    () => {
      const t1 = gsap.timeline();

      t1.from("nav img", {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "expo.out",
      });

      t1.from(
        "nav #navLinkDiv a",
        {
          opacity: 0,
          y: -20,
          duration: 0.8,
          stagger: 0.1,
          ease: "expo.out",
        },
        "-=0.6",
      );

      t1.from(
        "#contact-Button",
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "expo.out",
        },
        "-=0.6",
      );

      // 🔹 Smart Hide on Scroll Down, Show on Scroll Up
      ScrollTrigger.create({
        start: "top top",
        onUpdate: (self) => {
          if (self.direction === 1) {
            // Scrolling Down
            gsap.to(navRef.current, {
              yPercent: -100,
              opacity: 0,
              duration: 0.4,
              ease: "power2.inOut",
            });
          } else {
            // Scrolling Up
            gsap.to(navRef.current, {
              yPercent: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        },
      });
    },
    { scope: navRef },
  );

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(menuRef.current, {
          right: 0,
          duration: 0.8,
          ease: "expo.inOut",
        });

        gsap.to("#topSpan", {
          rotate: 45,
          y: 18,
          x: -5,
          width: "3.5rem",
          duration: 0.3,
        });

        gsap.to("#middleSpan", {
          opacity: 0,
          x: -20,
          duration: 0.3,
        });

        gsap.to("#bottomSpan", {
          rotate: -45,
          // y: -10,
          width: "3.5rem",
          duration: 0.3,
        });
        gsap.from(".menuLink", {
          x: 100,
          opacity: 0,
          stagger: 0.3,
          duration: 1,
          ease: "power2.out",
        });
        


      } else {
        gsap.to(menuRef.current, {
          right: "-100%",
          duration: 0.8,
          ease: "expo.inOut",
        });

        gsap.to("#topSpan", {
          rotate: 0,
          y: 0,
          width: "3.5rem",
          duration: 0.3,
        });

        gsap.to("#middleSpan", {
          opacity: 1,
          x: 0,
          duration: 0.3,
        });

        gsap.to("#bottomSpan", {
          rotate: 0,
          y: 0,
          width: "1.5rem",
          duration: 0.3,
        });
      }
    },
    { dependencies: [isOpen], scope: navRef },
  );

  return (
    <nav ref={navRef}>
      <img src="/images/logo.png" alt="filmiagi-production-logo" />
      <div id="navLinkDiv">
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.to} >
            {link.name}
          </NavLink>
        ))}
      </div>
      <Link to="/#contact" id="contact-Button">
        Contact Us
      </Link>

      <div id="navButton" onClick={() => setIsOpen(!isOpen)}>
        <span id="topSpan"></span>
        <span id="middleSpan"></span>
        <span id="bottomSpan"></span>
      </div>

      <div id="full-nav-menu" ref={menuRef}>
        <div id="menu-links">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className="menuLink"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/#contact"
            className="menuLink"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
