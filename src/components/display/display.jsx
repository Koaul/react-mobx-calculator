import React from 'react';
import styled from 'styled-components';
import {observer} from 'mobx-react';

const Display = observer(({store}) => 
    <DisplayDiv>
        {store.values.join('')}
    </DisplayDiv>
)

const DisplayDiv = styled.div`
    width:200px;
    height:50px;
    display:flex;
    flex-direction:row;
    justify-content: flex-end;
    align-items:center;
    padding-right:15px;
    border: 1px solid black;
    box-sizing:border-box;
`

export default Display;