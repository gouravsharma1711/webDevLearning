import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function NavBar() {

    useGSAP(()=>{
        const t1=gsap.timeline();

        t1.from('nav img',{
            opacity:0,
            y:-20,
            duration:1,
            ease:"expo.out"
        })

        t1.from('nav div a',{
            opacity:0,
            y:-20,
            duration:0.8,
            stagger:0.1,
            ease:"expo.out"
        }, "-=0.6")

        t1.from('#about-Button',{
            opacity:0,
            scale: 0.9,
            duration:0.8,
            ease:"expo.out",
        }, "-=0.6")
    })
    
    return (
        <nav>
            <img src="/images/logo.png" alt="filmiagi-production-logo" />
            <div>
                <NavLink
                    to='/#home'
                >
                    Home
                </NavLink>
                <NavLink
                    to='/#founder'
                >
                    Visionary
                </NavLink>
                <NavLink
                    to='/#team'
                >
                    Team
                </NavLink>
                <NavLink
                    to='/#Winners'
                >
                    Spotlight
                </NavLink>
                
                <NavLink
                    to='/#Highlights'
                >
                    Highlights
                </NavLink>
                <NavLink
                    to='/#whatsNew'
                >
                    Latest
                </NavLink>
            </div>
            <Link
                to='/#about'
                id='about-Button'
            >About</Link>
        </nav>
    )
}

export default NavBar
