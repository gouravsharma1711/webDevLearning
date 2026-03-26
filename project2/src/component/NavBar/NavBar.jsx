import React from 'react'
import {Link,NavLink} from 'react-router-dom';


function NavBar() {
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
