import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    const [toggle,setToggle]=useState(false);

    const MobileNav = ()=>{
        const MobileView = document.querySelector("ul")
        setToggle(!toggle)
        MobileView.classList.toggle('mob-menu')
    }

  return (
    <nav className='navbar'>
        <ul className='nav-items'>
            <li className='nav-list'>
                <Link onClick={()=>MobileNav()}
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={800}
                >
                    <span>Home</span>
                </Link>
            </li>
            <li className='nav-list'>
                <Link onClick={()=>MobileNav()}
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    duration={800}
                >
                    <span>About</span>
                </Link>
            </li>
            <li className='nav-list'>
                <Link onClick={()=>MobileNav()}
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    duration={800}
                >
                    <span>Skills</span>
                </Link>
            </li>
            <li className='nav-list'>
                <Link onClick={()=>MobileNav()}
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    duration={800}
                >
                    <span>Projects</span>
                </Link>
            </li>
            <li className='nav-list'>
                <Link onClick={()=>MobileNav()}
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={800}
                >
                    <span>Contact</span>
                </Link>
            </li>
        </ul>
        <div className='menu-bar' onClick={()=>MobileNav()}>
            {toggle ?<FontAwesomeIcon icon={faXmark} style={{color: "#8A00C4",}} size="2xl" />:<FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#8A00C4",}} />}
        </div>
    </nav>
  )
}

export default Navbar;