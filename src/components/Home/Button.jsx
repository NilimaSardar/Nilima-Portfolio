import React from 'react'
import styled from 'styled-components'

function Button({color, text, icon}) {
  return (
    <Button_part color={color}>
        <button>{text}{icon}</button>
    </Button_part>
  )
}

export default Button

const Button_part = styled.div`
    button{
        padding: 8px;
        font-size: 18px;
        border-radius: 20px;
        background-color: ${(props)=>props.color? '#72b572':'none'};
        cursor: pointer;
    }
`;