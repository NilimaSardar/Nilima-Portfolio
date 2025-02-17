import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FaReact } from "react-icons/fa";

function Footer() {
  const [quote, setQuote] = useState("");

    const quotes = [
      "Code is like humor. When you have to explain it, it’s bad. – Cory House",
      "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",
      "The best way to get a project done faster is to start sooner. – Jim Highsmith",
    ];

  useEffect(()=>{
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  },[]);

  return (
    <FooterPage>
        <div className='quote-section'>
            <h5>Quote of the day</h5>
            <p>"{quote}"</p>
        </div>
        <p>Created with ReactJS <FaReact fontSize='20px'/> by <span>NILIMA</span></p>
    </FooterPage>
  )
}

export default Footer;

const FooterPage = styled.div`
    width: 100%;
    background-color: #757272a8;
    /* color: #555454da; */
    color: #000000b6;
    letter-spacing: 0.2px;
    height: 170px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

  .quote-section{
    width: 70%;
    padding: 2px;
    text-align: center;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    gap: 12px;
  }
  .quote-section h5{
    font-family: "Roboto";
    font-size: 30px;
    /* color: #4a4444d9; */
    color: #f6f6f6;
  }
  .quote-section p{
    font-family: "Roboto";
    font-size: 20px;
    /* color: #f1ebebe6; */
    color: #f6f6f6;
  }

  span{
    font-weight: 600;
    letter-spacing: 1px;
  }
  @media (max-width: 360px) or (max-height: 740px) {
        padding: 60px 0;
        height: 170px;

        .quote-section{
          width: 70%;
          height: auto;
        }

        .quote-section h5{
          font-size: 25px;
        }

        .quote-section p{
          font-size: 18px;
        }
  }
`;