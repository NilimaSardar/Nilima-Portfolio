import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FaReact } from "react-icons/fa";

function Footer() {
  const [quote, setQuote] = useState("");

    const quotes = [
      "Code is like humor. When you have to explain it, it’s bad. – Cory House",
      "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",
      "The best way to get a project done faster is to start sooner. – Jim Highsmith",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
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
    color: #555454da;
    height: 170px;
    font-size: 18px;
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
    justify-content: center;
    align-items: center;
  }
  .quote-section h5{
    font-family: "Roboto";
    font-size: 30px;
    color: #4a4444d9;
  }
  .quote-section p{
    font-family: "Roboto";
    font-size: 20px;
    color: #f1ebebe6;
  }

  span{
    font-weight: 600;
    color: #4a4444d0;
    letter-spacing: 1px;
  }

`;