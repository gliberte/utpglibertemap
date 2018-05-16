import React from 'react'
import styled from 'styled-components'
import {Button,Icon} from 'antd'

const ButtonGroup = Button.Group
const Container = styled.div`
    position:absolute;
    top:55px;
    right:20%;
    z-index:999;
`

export default ({map})=>{
    const adquirirA = ()=>{
        console.log(map.getLayer('puntos_empresa'))
    }
    const adquirirC = ()=>{
        console.log(map.getSource('puntos_empresa'))
    }
    return (
        <Container>
            <ButtonGroup>
                <Button onClick={adquirirA}>A</Button>
                <Button>B</Button>
                <Button onClick={adquirirC}>C</Button>
            </ButtonGroup>
        </Container>
    )
}