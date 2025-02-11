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
import { BsSend } from "react-icons/bs";

function Footer() {
  return (
    <FooterPage>
      <div className='social'>
          <div className='social-intro'>
              <h1>Get In Touch</h1>
              <p>Have a project you'd like to discuss? Just leave a message and I'll get back to you within 24 hours.</p>
              <Button icon={<BsSend fontSize='16px'/>} color='color' text='Send Details'/>
          </div>
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
      </div>
      <div className='right'>
        <p>Created with ReactJS <FaReact fontSize='18px'/> by <span>NILIMA</span></p>

      </div>
    </FooterPage>
  )
}

export default Footer

const FooterPage = styled.div`
  width: 100%;

  .social{
    background-color: #bbb7b7;
    height: 250px;
    display: flex;
    padding: 0 100px;
    gap: 30px;
  }
  .social .social-intro{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
  .social .social-media{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .social-media h5{
    font-size: 30px;
  }
  .social-media ul{
    display: flex;
    list-style-type: none;
    gap: 10px;
  }
  .social-media ul li{
    font-size: 28px;
    color: #735a5a;
  }

  .right{
    background-color: #5e5d5d;
    color: #bbb7b7;
    height: 80px;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right span{
    font-weight: 600;
  }

`;