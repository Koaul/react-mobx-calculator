import React from 'react';
import styled from 'styled-components';

const Button = ({val, equal, store}) => (
    <ButtonDiv onClick={()=>store.NumberAction(val)} equal={equal}>
        {val}
    </ButtonDiv>
)

const ButtonDiv = styled.div`
    width: ${props => props.equal ? '150px' : '50px'};
    height: 50px;
    font-size:2em;
    color:white;
    background-color:rgb(80,80,80);
    border: 1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    box-sizing:border-box;
`

export default Button;