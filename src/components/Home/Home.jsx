import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <HomePage>
        <div className='main-section'>
            <div className='intro'>
                <h1>&lt; Nilima <br /> Sardar /&gt;</h1>
                <span>Frontend Developer</span>
                <ul>
                  <Link to='/'><li><FaGithub/></li></Link>
                  <Link to='/'><li><FaLinkedin/></li></Link>
                  <Link to='/'><li><FaSquareInstagram/></li></Link>
                </ul>
            </div>
            {/* <div className='intro'>
                <h1>Hi! I'm </h1>
                <span>NILIMA</span>
                <h2>Frontend Developer</h2>
                <div className='button'>
                  <Button color='color' text='Download CV' icon={<MdOutlineFileDownload fontSize='max(1.5vw, 13px)'/>}/>
                  <Button text='About Me'/>
                </div>
            </div> */}
            
            <div className='image'>
                <img src="https://static.vecteezy.com/system/resources/previews/010/865/005/non_2x/continuous-line-drawing-woman-sitting-holding-laptop-vector.jpg" alt="" />
            </div>
        </div>
        
        <div className="down">
          <div className="down-icon">
            <FaAngleDown/>
          </div>    
        </div>
    </HomePage>
  )
}

export default Home

const HomePage = styled.div`

      .main-section{
        font-size: 35px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* background-color: red; */
        padding: 150px;
        height: calc(100vh - 80px);

      }
      .intro{
        line-height: 50px;
        padding: 100px 0;
      }
      .intro ul{
        width: 100%;
        display: flex;
        list-style-type: none;
        gap: 15px;
        padding-left: 20px;
      }
      .intro ul li{
        font-size: 28px;
        color: #5e5d5d9f;
        transition: 0.3s;
      }
      .intro ul li:hover{
        color: #5e5d5d;
      }
      
      .intro span{
        font-weight: 700;
        letter-spacing: 5px;
      }
      .intro h1{
        font-size: max(4vw, 32px);
      }

      .image{
        width: 45%;
        height: auto;
      }
      .image img{
        width: 100%;
        height: 100%;
        border-radius: 70%;
        /* border: 1px solid blue; */
      }

      .down{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: #5e5d5d; */
      }

      .down-icon{
        /* background-color: azure; */
        height: 80px;
        width: 80px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 38px;
        color: #5e5d5d9f;
        animation: bounce 1.5s infinite ease-in-out;
      }

      @keyframes bounce {
          0%, 100% {
              transform: translateY(0);
          }
          50% {
              transform: translateY(-10px);
          }
      }
`;