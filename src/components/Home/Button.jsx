import React from 'react'
import styled from 'styled-components'

function Button({color, text}) {
  return (
    <Button_part color={color}>
        <button>{text}</button>
    </Button_part>
  )
}

export default Button

const Button_part = styled.div`
    button{
        padding: 8px;
        /* font-size: 18px; */
        font-size: max(1.3vw, 14px);
        border-radius: 20px;
        background-color: ${(props)=>props.color? '#72b57281':'none'};
        cursor: pointer;
        transition: 0.3s;
    }
    button:hover{
      background-color: #72b572;
    }
`;