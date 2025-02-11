import React from 'react'
import styled from 'styled-components'
import Button from '../Home/Button';

function Contact() {
  return (
    <ContactSection>
      <h1>Contact Me</h1>
      <p>
        If you want to work with me please fill the form below
        and I'll get back to you within 24 hours.
      </p>
      <form action="">
        <div className='input-field'>
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" placeholder='Nilima Saradr'/>
        </div>
        <div className='input-field'>
          <label htmlFor="email">E-MAIL</label>
          <input type="email" id="email" placeholder='nilima@gmail.com'/>
        </div>
        <div className='input-field textarea'>
          <label htmlFor="textarea">HOW CAN I HELP?</label>
          <textarea id="textarea" name="textarea" rows="20" cols="50" placeholder="We run a small startup and we want a website for the same.."></textarea>
        </div>
      </form>
      <Button text="SUBMIT" color="color"/>
    </ContactSection>
  )
}

export default Contact


const ContactSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 70px 0;
  gap: 10px;

  h1{
    margin-bottom: 10px;
  }

  form{
    width: 100%;
    display: grid;
    place-items: center;
  }
  .input-field{
    /* background-color: red; */
    width: 50%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
  }

  .textarea{
    height: 200px;
  }

  .input-field label{
    font-weight: 500;
    font-size: 18px;
  }

  .input-field input{
    border: none;
    border-bottom: 4px solid #72b572;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
  }

  .input-field textarea {
    width: 100%;
    height: 150px;
    font-size: 16px;
    padding: 10px;
    border: none;
    border-bottom: 4px solid #72b572;
    border-radius: 4px;
    resize: none;
    overflow: hidden;
}

input:focus{
  outline: none;
} 
textarea:focus{
  outline: none;
}

`;