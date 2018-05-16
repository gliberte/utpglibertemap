import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import ReactMapBoxGl from 'react-mapbox-gl'
import Digitalizacion from './componentes/Digitalizacion'
import Encabezado from './componentes/Encabezado'
import { Query } from 'react-apollo'

import gql from 'graphql-tag'
import LayerPuntos from './componentes/mapa/LayerPuntos'
import BarraHerramientas from './tools/BarraHerramientas'
import InfoW from './componentes/mapa/InfoW'
import LayerResalto from './componentes/mapa/LayerResalto'


const Map = ReactMapBoxGl({
    accessToken: "pk.eyJ1IjoiZ2xpYmVydGUiLCJhIjoiY2l5OTFjMGVtMDA3aDMycW91eDZ2bnBkMyJ9.0ribIg_tlpagcxJmFyFM9A"
})
const Container = styled.div`
  height:100vh;
  display:grid;
  grid-template-rows:50px auto;
`


const Mapa = styled(Map) `
    height:calc(100vh - 50px);
`

const GET_USER = gql`
    {
        user{
            id
            nombre
            empresa
            role
        }
    }
`

class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            map:null,
            evtclickfeature:null,
            zoom:8,
            center:[-79.504571, 9.034881]
        }

    }
    onStyleLoad = (map,evt)=>{
        this.setState({
            map
        })
    }
    onClickPunto = (evt) =>{
        //console.log(evt.map.queryRenderedFeatures([evt.point.x,evt.point.y],{layers:['puntos_empresa']}))
        this.setState({evtclickfeature:evt})
    }
    onZoomEnd = (map,evt) =>{

        const {lng,lat} = map.getCenter()
        this.setState({
            zoom:map.getZoom(),
            center:[lng,lat]
        })
    }
    onClick = (map,evt)=>{
        
        const {x,y} = evt.point
        const ArrayElementosClickeados = map.queryRenderedFeatures([x,y],{
            layers:['puntos_empresa']
        })
        if(ArrayElementosClickeados.length === 0){
            this.setState({
                evtclickfeature:null
            })
        }
    }
   

    render() {

        return (

            <Query query={GET_USER}>
                {({ loading, error, data }) => {
                    if(loading) return <p>Revisando usuario...</p>
                    return (

                        <Container>
                            <Encabezado user={data ? data.user : null}/>
                            <BarraHerramientas map={this.state.map}/>
                            <Mapa
                                //style="mapbox://styles/gliberte/cjh7swe3q691j2st90bl8mmvp"
                                style="mapbox://styles/mapbox/streets-v9"
                                center={this.state.center}
                                zoom={[this.state.zoom]}
                                onStyleLoad={this.onStyleLoad}
                                onZoomEnd={this.onZoomEnd}
                                onClick={this.onClick}
                                
                            >
                                <Digitalizacion/>
                                <LayerResalto feature={this.state.evtclickfeature ? this.state.evtclickfeature.feature : null}/>
                                <LayerPuntos onClickPunto={this.onClickPunto}/>
                                
                                <InfoW evtclickfeature={this.state.evtclickfeature}/>
                            </Mapa>
                        </Container>

                    )
                }}
            </Query>




        );
    }
}

export default App;


