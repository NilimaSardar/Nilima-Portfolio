import React from 'react'
import styled from 'styled-components'
import Button from '../Home/Button';
import {Link} from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <FooterPage>
      <div className='right'>
        <div className='social-media'>
            <h5>Social Links</h5>
            <ul>
              <Link to='/'><li><FaFacebook/></li></Link>
              <Link to='/'><li><FaSquareInstagram/></li></Link>
              <Link to='/'><li><FaGithub/></li></Link>
              <Link to='/'><li><FaLinkedin/></li></Link>
              <Link to='/'><li><MdEmail/></li></Link>
            </ul>
          </div>
        <p>Created with ReactJS <FaReact fontSize='20px'/> by <span>NILIMA</span></p>
      </div>
    </FooterPage>
  )
}

export default Footer

const FooterPage = styled.div`
  width: 100%;

  .social-media{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .social-media h5{
    font-size: 30px;
    color: #4a4444d9;
  }
  .social-media ul{
    display: flex;
    list-style-type: none;
    gap: 10px;
  }
  .social-media ul li{
    font-size: 28px;
    color: #43363695;
  }

  .right{
    background-color: #757272a8;
    color: #5e5d5daf;
    height: 180px;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right span{
    font-weight: 600;
    color: #4a4444d0;
    letter-spacing: 1px;
    /* font-size: 20px; */
  }

  @media (max-width: 768px) {
          .social {
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 30px 0 0 0; /* Reduce padding for better spacing */
              height: auto; /* Adjust height to fit content */
          }

      }

`;