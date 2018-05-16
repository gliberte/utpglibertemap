import React from 'react'
import styled from 'styled-components'
import {Popup} from 'react-mapbox-gl'


const Contenido = ({properties})=>(
    <div>
        <h2>{properties.descripcion}</h2>
        <p>{properties.identificador}</p>
        <p>{properties.capturador}</p>
    </div>
)

export default ({evtclickfeature})=>{
    if(evtclickfeature){
        const {lng,lat} = evtclickfeature.lngLat
        return (
            <Popup
            coordinates={[lng,lat]}
            offset={{
                'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
            }}
            
            >
            <Contenido properties={evtclickfeature.feature.properties}/>
            </Popup>
        )
    }else{
        return null
    }
    
}