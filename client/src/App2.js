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

    }
    onStyleLoad = (map,evt)=>{
        
    }

    render() {

        return (

            <Query query={GET_USER}>
                {({ loading, error, data }) => {
                    if(loading) return <p>Revisando usuario...</p>
                    return (

                        <Container>
                            <Encabezado user={data ? data.user : null}/>
                            <Mapa
                                style="mapbox://styles/gliberte/cjh7swe3q691j2st90bl8mmvp"
                                center={[-79.504571, 9.034881]}
                                zoom={[8]}
                                onStyleLoad={this.onStyleLoad}
                            >
                                <Digitalizacion

                                />
                                <LayerPuntos/>
                            </Mapa>
                        </Container>

                    )
                }}
            </Query>




        );
    }
}

export default App;


