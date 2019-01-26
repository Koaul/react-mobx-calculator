import React from 'react';
import Display from '../display/display';
import Button from '../button/button';
import styled from 'styled-components';
import CalculatorSymbols from '../../constants.js';

import ValueStore from '../../store/store'  

const valueStore = new ValueStore()

const App = () => (
    <AppBody>
        <Display store={valueStore}/>
        <ButtonList>
            { CalculatorSymbols.map(row => 
                <Row key={Date.now()/Math.random()}> 
                    {   row.map(symbol =>
                            <Button val={ symbol } equal={symbol==='=' ? true : false } store={valueStore} key={Date.now()*Math.random()}/>
                        ) 
                    } 
                </Row>)
            }
        </ButtonList>
    </AppBody>
)

const Row = styled.div`
    width:200px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    box-sizing:border-box;
`
const ButtonList = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
`

const AppBody = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export default App;