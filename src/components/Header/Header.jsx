import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function Header({ scrollToSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    
        if (!isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <HeaderSec>
            <div className='header'>
                <div className='logo'>
                    <p onClick={() => scrollToSection('home')}>N..</p>
                </div>
                <nav>
                    <ul className='pc'>
                        <li onClick={() => scrollToSection('about')}>About</li>
                        <li onClick={() => scrollToSection('projects')}>Projects</li>
                        <li onClick={() => scrollToSection('contact')}>Contact</li>
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
                        <li onClick={() => { scrollToSection('about'); closeMenu();}}>About</li>
                        <li onClick={() => { scrollToSection('projects'); closeMenu();}}>Projects</li>
                        <li onClick={() => { scrollToSection('contact'); closeMenu();}}>Contact</li>
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
        cursor: pointer;
    }

    nav .pc{
        display: flex;
        text-decoration: none;
        list-style: none;
        gap: 20px;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
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
        cursor: pointer;
    }


    @media (max-width: 768px) {
        .header{
            padding: 0 3cap;
        }
        nav .pc{
            display: none;
        }

        nav .mbl{
            display: block;
        }
    }
`;