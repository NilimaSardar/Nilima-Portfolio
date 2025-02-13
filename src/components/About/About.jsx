import React from 'react'
import styled from 'styled-components'
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import Button from '../Home/Button';

function About() {
  return (
    <AboutSection>
        <div className='about-section'>
          <h1>&lt;About ME/&gt;</h1>
          <div className='about-intro'>
            <p>
              I am BCA student seeking an internship to apply and enhance technical
              knowledge. Experienced in developing projects like a Typing Speed Test and 
              a Pet Store platform, with a focus on creating responsive and user-friendly 
              web applications. Eager to contribute to innovative teams and gain hands-on 
              industry experience.
            </p>
            <p>
            Want to know more about my journey? You can download my Resume by clicking the button below.
            </p>
            <Button_part>
              <button>Resume</button>
            </Button_part>
          </div>

            <div className='skills'>
              <h2>TOOLS I USE</h2>
              <ul>
                <li>
                  <div className='icon-div'>
                    <SiHtml5 className='icon'/>
                  </div>
                  <div className="para">
                    <p>HTML</p>
                  </div>
                </li>
                <li>
                  <div className="icon-div">
                    <SiCss3 className='icon'/>
                  </div>
                  <div className="para">
                    <p>CSS</p>
                  </div>
                </li>
                <li>
                  <div className="icon-div">
                    <RiJavascriptFill className='icon'/>
                  </div>
                  <div className="para">
                    <p>JavaScript</p>
                  </div>
                </li>
                <li>
                  <div className="icon-div">
                    <FaReact className='icon'/>
                  </div>
                  <div className="para">
                    <p>ReactJS</p>
                  </div>
                </li>
                <li>
                  <div className="icon-div">
                    <FaGithubSquare className='icon'/>
                  </div>
                  <div className='para'>
                    <p>(git&Github)</p>
                  </div>
                </li>
              </ul>
            </div>

        </div>
    </AboutSection>
  )
}

export default About

const AboutSection = styled.div`
  width: 100%;
  padding: 60px 100px 40px 100px;
  letter-spacing: 1px;

  .about-section{
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .about-section .about-intro{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0 50px 0;
    gap: 20px;
  }
  .about-section p{
    width: 80%;
    text-align: justify;
  }

  .skills{
    width: 100%;
    padding: 20px;
  }

  .skills h2{
    display: flex;
    justify-content: center;
  }

  .skills ul{
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    font-size: 20px;
    font-weight: 500;
    padding: 20px;
    flex-wrap: wrap;
    /* background-color: blue; */
  }

  .skills ul li{
    max-height: 170px;
    /* height: max(1vw, 50px); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .skills ul li .icon-div{
    background-color: #72b572;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    font-size: 60px;
    color: #3a3a3a;

  }

  .skills ul li .para{
    color: #828282;
    /* background-color: grey; */
  }

  @media (max-width: 768px) {
         padding: 0;

         .about-section{
          padding: 20px 0;
         }

        /* Responsive Design */
        .skills ul {
        justify-content: center; /* Keep items centered */
        padding: 10px;
        font-size: 18px;
    }

    .skills ul li {
        max-height: none; /* Allow flexible height */
    }

    .skills ul li .icon-div {
        height: 80px;
        width: 80px;
        font-size: 45px; /* Adjust icon size */
    }

    .skills ul li .para {
        font-size: 16px; /* Adjust text size */
    }
      }

`;


const Button_part = styled.div`
    width: 100%;
    padding: 0 0 0 130px;


    button{
        padding: 5px 12px;
        /* font-size: 18px; */
        font-size: max(1.3vw, 20px);
        border-radius: 18px;
        border: 2px solid #72b572;
        color: #72b572;
        /* background-color: #72b57281; */
        cursor: pointer;
        transition: 0.3s;
    }
    button:hover{
      background-color: #72b572;
      color: black;
      /* border: 1px solid black; */
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0;
    }
`;