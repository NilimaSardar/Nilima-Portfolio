import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import axios from 'axios';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async(event) =>{
    event.preventDefault();

    //EmailJS serviceID, temlateID and Public key
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Nilima',
        message: message,
      }
    };

    //send the mail using Emails
    try{
      const res = await axios.post(import.meta.env.VITE_API_URL, data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    }
    catch(error){
      console.error('Error sending email:', error);   
    }


  }

  return (
    <ContactSection>
      <h1>&lt;Contact ME/&gt;</h1>
      <p>
        Feel free to send me a message!.
      </p>
      <form onSubmit={handleSubmit}>
        <div className='input-field'>
          <label htmlFor="name">NAME</label>
          <input 
            type="text" 
            id="name" 
            placeholder='name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
        </div>
        <div className='input-field'>
          <label htmlFor="email">E-MAIL</label>
          <input 
            type="email" 
            id="email" 
            placeholder='e-mail'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <div className='input-field textarea'>
          <label htmlFor="textarea">HOW CAN I HELP?</label>
          <textarea 
            id="textarea" 
            name="textarea" 
            rows="20" 
            cols="50" 
            placeholder="message..."
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            ></textarea>
        </div>
        <Button_part>
        <button type='submit'>Send</button>
      </Button_part>
      </form>
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
  padding: 70px 0;
  gap: 10px;

  h1{
    margin-bottom: 10px;
  }
  p{
    text-align: center;
    font-size: 22px;
    padding: 0px 70px;
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

@media (max-width: 768px) {
  padding: 70px 30px;
  .input-field{
    width: 100%;
  }
}

`;

const Button_part = styled.div`
    button{
        padding: 8px 30px;
        /* font-size: 18px; */
        font-size: max(1.3vw, 20px);
        border-radius: 18px;
        background-color: #72b57281;
        cursor: pointer;
        transition: 0.3s;
    }
    button:hover{
      background-color: #72b572;
    }

    @media (max-width: 768px) {
        align-items: left;
        width: 100%;
        padding: 8px 20px;
    }
`;