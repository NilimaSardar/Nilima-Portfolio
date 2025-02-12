import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function Header({ scrollToSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    
        if (!isMenuOpen) {
            document.body.style.overflow = "hidden"; // Disable scrolling
            document.body.style.backdropFilter = "blur(5px)"; // Apply blur
        } else {
            document.body.style.overflow = "auto"; // Enable scrolling
            document.body.style.backdropFilter = "none"; // Remove blur
        }
    };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto"; // Restore scrolling
        document.body.style.backdropFilter = "none"; // Remove blur
    };

    const navLinkStyles = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: 'none',
    });

    return (
        <HeaderSec>
            <div className='header'>
                <div className='logo'>
                    <p>N..</p>
                </div>
                <nav>
                    <ul className='pc'>
                        <NavLink onClick={() => scrollToSection('home')} style={navLinkStyles} to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink onClick={() => scrollToSection('about')} style={navLinkStyles} to="/about">
                            <li>About</li>
                        </NavLink>
                        <NavLink onClick={() => scrollToSection('projects')} style={navLinkStyles} to="/projects">
                            <li>Projects</li>
                        </NavLink>
                        <NavLink onClick={() => scrollToSection('contact')} style={navLinkStyles} to="/contact">
                            <li>Contact</li>
                        </NavLink>
                    </ul>
                    <div className='mbl' onClick={toggleMenu}>
                        <FaBars />
                    </div>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div className={`mbl-nav ${isMenuOpen ? 'active' : ''}`}>
                <div className='up-down-menu'>
                    <div className='mbl-icon' onClick={closeMenu}>
                        <RxCross2 className='icon' />
                    </div>
                    <ul className='mbl-menu'>
                        <NavLink onClick={() => { scrollToSection('home'); closeMenu(); }} style={navLinkStyles} to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink onClick={() => { scrollToSection('about'); closeMenu(); }} style={navLinkStyles} to="/about">
                            <li>About</li>
                        </NavLink>
                        <NavLink onClick={() => { scrollToSection('projects'); closeMenu(); }} style={navLinkStyles} to="/projects">
                            <li>Projects</li>
                        </NavLink>
                        <NavLink onClick={() => { scrollToSection('contact'); closeMenu(); }} style={navLinkStyles} to="/contact">
                            <li>Contact</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </HeaderSec>
    );
}

export default Header;



const HeaderSec = styled.header`
    .header{
        width: 100%;
        position: fixed;
        z-index: 1;
        padding: 0 70px;
        background-color: #72b572;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }
    .logo{
        font-size: 45px;
        font-weight: 500;
        letter-spacing: 2px;
        padding: 5px;
        font-family: "Caveat";
    }

    nav .pc{
        display: flex;
        text-decoration: none;
        list-style: none;
        gap: 20px;
        font-size: 20px;
        font-weight: 500;
    }
    nav ul li{
        text-decoration: none;
        color: black;
    }
    .mbl{
        font-size: 20px;
        font-weight: 500;
        display: none;
        cursor: pointer;
    }

    .mbl-nav{
        display: none;
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background: rgba(72, 135, 85, 0.736);
        transition: 0.3s ease-in-out;
    }
    .mbl-nav.active{
        display: block;
        opacity: 1;
        visibility: visible;
    }
   
    .up-down-menu{
        height: 220px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        position: relative;
    }
    .up-down-menu .mbl-icon{
        position: absolute;
        right: 45px;
        padding: 22px;
        cursor: pointer;
    }

    .up-down-menu .mbl-icon .icon{
        font-size: 28px;
    }
    .mbl-menu{
        padding: 20px;
        width: 100%;
        height: 60%;
        /* background-color: #72b572; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        list-style: none;
        gap: 20px;
        font-size: 20px;
        font-weight: 500;

    }

    .mbl-menu  li{
        text-decoration: none;
        font-size: 22px;
        color: #e7d8d8;
    }


    @media (max-width: 768px) {
        nav .pc{
            display: none;
        }

        nav .mbl{
            display: block;
        }
    }
`;