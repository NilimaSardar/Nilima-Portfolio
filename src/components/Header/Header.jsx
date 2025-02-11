import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import { FaBars } from "react-icons/fa6";


function Header() {
    const navLinkStyles = ({isActive}) =>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration:  'none',
        }
    }
  return (
    <HeaderSec>
        <div className='logo'>
            <p>N..</p>
        </div>
        <nav>
            <ul>
                <NavLink style={navLinkStyles} to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink style={navLinkStyles} to="/projects">
                    <li>Projects</li>
                </NavLink>
                <NavLink style={navLinkStyles} to="/about">
                    <li>About</li>
                </NavLink>
                <NavLink style={navLinkStyles} to="/contact">
                    <li>Contact</li>
                </NavLink>
            </ul>
            {/* <div className='menu-icon'>
            <FaBars />
            </div> */}
        </nav>
    </HeaderSec>
  )
}

export default Header


const HeaderSec = styled.header`
    padding: 0 70px;
    background-color: #72b572;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    .logo{
        font-size: 45px;
        font-weight: 500;
        letter-spacing: 2px;
        padding: 5px;
        font-family: "Caveat";
    }
    /* .logo p::first-letter{
        font-size: 36px;
        font-weight: 500;
    } */

    nav ul{
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
`;