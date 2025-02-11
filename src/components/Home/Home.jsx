import React from 'react'
import styled from 'styled-components'
import Button from './Button';
import { MdOutlineFileDownload } from "react-icons/md";

function Home() {
  return (
    <HomePage>
        <div className='main-section'>
            <div className='intro'>
                <h1>Hi! I'm </h1>
                <span>NILIMA</span>
                <h2>Frontend Developer</h2>
                <div className='button'>
                  <Button color='color' text='Download CV' icon={<MdOutlineFileDownload fontSize='20px'/>}/>
                  <Button text='About Me'/>
                </div>
            </div>
            
            <div className='image'>
                <img src="https://static.vecteezy.com/system/resources/previews/010/865/005/non_2x/continuous-line-drawing-woman-sitting-holding-laptop-vector.jpg" alt="" />
            </div>
        </div>
    </HomePage>
  )
}

export default Home

const HomePage = styled.div`
    /* width: 100%; */
    /* background-color: rebeccapurple; */

      .main-section{
        font-size: 35px;
        display: flex;
        justify-content: space-between;
        /* background-color: red; */
        padding: 100px;
        height: calc(100vh - 80px);

      }
      .intro{
        line-height: 50px;
        padding: 100px 0;
      }
      
      .intro span{
        font-weight: 700;
        letter-spacing: 5px;
      }
      .intro h2{
        font-size: 65px;
      }
      .intro .button{
        /* background-color: red; */
        margin: 20px 10px;
        display: flex;
        gap: 10px;
      }
      .image{
        width: 50%;
        height: auto;
      }
      .image img{
        width: 100%;
        height: 100%;
        border-radius: 70%;
        /* border: 1px solid blue; */
      }

`;