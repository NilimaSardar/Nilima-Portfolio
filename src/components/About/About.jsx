import React from 'react'
import styled from 'styled-components'
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function About() {
  return (
    <AboutSection>
        <div className='about-section'>
          <h1>About ME</h1>
          <div className='about-intro'>
            <p>
              I am BCA student seeking an internship to apply and enhance technical
              knowledge. Experienced in developing projects like a Typing Speed Test and 
              a Pet Store platform, with a focus on creating responsive and user-friendly 
              web applications. Eager to contribute to innovative teams and gain hands-on 
              industry experience.
            </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxPddyIliLsYHygk-laKxRDBTP15BxsrcNg&s" alt="" />
          </div>
            <div className='enhance'>
            <div className='education'>
              <h2>Education</h2>
              <div className='education-more'>
                <h3>SEE</h3>
                <p>Star Secondary Boarding School</p>
                <p>2005-2018</p>
              </div>
              <div className='education-more'>
                <h3>+2 COMPUTER SCIENCE</h3>
                <p>Kantipur Secondary School</p>
                <p>2018-2020</p>
              </div>
              <div className='education-more'>
                <h3>BACHELOR IN COMPUTER APPLICATION</h3>
                <p>Himalaya Darshan College</p>
                <p>2020-present</p>
              </div>
            </div>

            <div className='skills'>
              <h2>SKILLS</h2>
              <ul>
                <li><SiHtml5 className='icon'/>HTML</li>
                <li><SiCss3 className='icon'/>CSS</li>
                <li><RiJavascriptFill className='icon'/>JavaScript</li>
                <li><FaReact className='icon'/>ReactJS</li>
                <li><FaGithubSquare className='icon'/>Version control(git & Github)</li>
              </ul>
            </div>
            </div>
        </div>
    </AboutSection>
  )
}

export default About

const AboutSection = styled.div`
  width: 100%;
  /* height: calc(100vh - 64.4px); */
  display: grid;
  place-items: center;
  padding: 30px 100px;
  letter-spacing: 1px;

  .about-section{
      height: 100vh;
  }

  .about-section .about-intro{
    display: flex;
    justify-content: space-between;
  }
  .about-section p{
    width: 50%;
    text-align: justify;
  }
  .about-section img{
    width: 40%;
  }

  .enhance{
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    margin-top: 20px;

  }

  .enhance h2{
    letter-spacing: 2px;
  }

  .education{
    padding: 20px;
    /* background-color: red; */
    width: 50%;
  }

  .skills{
    padding: 20px;
    /* background-color: green; */
    width: 50%;
  }

  .skills ul{
    list-style-type: none;
    font-size: 20px;
    font-weight: 500;
    margin: 10px 10px;
  }

  .skills ul .icon{
    margin-right: 5px;
  }

`;