import React from 'react'
import styled from 'styled-components'
import {
    ToggleGroup,
    DigitizeButton,
    Toolbar
  } from '@terrestris/react-geo'


const finalizarDibujo = evt =>{
    console.log(evt.feature.getGeometry())
}

const Container = styled.div`
    position:absolute;
    top:56px;
    left:100px;
    z-index:1;
    button{
        margin-right:2px;
    }
    
`


export default ({map}) =>(
    <Container>
          
          <ToggleGroup orientation="vertical">
        
          <DigitizeButton
              name="drawPoint"
              map={map}
              drawType="Point"
              onDrawEnd={finalizarDibujo}
            >
              <i className="fa fa-map-marker"></i>
            </DigitizeButton>
         
            
            <DigitizeButton
              name="drawLine"
              map={map}
              drawType="LineString"
            >
              <i className="fa fa-minus"></i>
            </DigitizeButton>
  
        
            <DigitizeButton
              name="drawPolygon"
              map={map}
              drawType="Polygon"
            >
              Poly
            </DigitizeButton>

            <DigitizeButton
              name="drawCircle"
              map={map}
              drawType="Circle"
            >
              <i className="fa fa-circle-thin"></i>
            </DigitizeButton>

            <DigitizeButton
              name="drawRectangle"
              map={map}
              drawType="Rectangle"
            >
              <i className="fa fa-square-o"></i>
            </DigitizeButton>

            <DigitizeButton
              name="drawText"
              map={map}
              drawType="Text"
            >
              <i className="fa fa-font"></i>
            </DigitizeButton>

            <DigitizeButton
              name="selectAndModify"
              map={map}
              editType="Edit"
            >
                <i className="fa fa-mouse-pointer"></i>
            </DigitizeButton>

            <DigitizeButton
              name="copyFeature"
              map={map}
              editType="Copy"
            >
              <i className="fa fa-copy"></i>
            </DigitizeButton>

            <DigitizeButton
              name="deleteFeature"
              map={map}
              editType="Delete"
            >
              <i className="fa fa-eraser"></i>
            </DigitizeButton>

          </ToggleGroup>
  
          
        </Container>
)