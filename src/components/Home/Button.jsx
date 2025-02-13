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
        font-size: max(0.8vw, 14px);
        border-radius: 20px;
        background-color: ${(props)=>props.color? '#b4e98cd2':'none'};
        cursor: pointer;
        transition: 0.3s;
    }
    button:hover{
      background-color: #72b572;
      color: black;
    }
`;