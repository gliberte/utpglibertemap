import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { Layer, Feature } from 'react-mapbox-gl'
import { GET_PUNTOS_POR_EMPRESA } from '../../query/query'


export default ({onClickPunto}) => {
    return (
        <Query
            query={GET_PUNTOS_POR_EMPRESA}
            pollInterval={500}
        >
            {({ loading, error, data }) => {
                if (loading) return null
                if (error) return null
                return (
                    <Layer 
                    id="puntos_empresa" 
                    type="circle"
                    before="layer_resalto"
                    paint={{
                        "circle-radius":8,
                        "circle-color":"#1E88E5",
                        "circle-stroke-width":1,
                        "circle-stroke-color":"#455A64"
                    }}
                    >
                        {data.puntosEmpresaActual.map(punto => {
                            const {identificador,descripcion,user} = punto
                            const properties = {
                                identificador,
                                descripcion,
                                capturador:user.nombre
                            }
                            return (
                                <Feature 
                                key={punto.id} 
                                coordinates={punto.geom.coordinates}
                                properties={properties}
                                onClick={onClickPunto}
                                 />

                            )
                        })}

                    </Layer>
                )
            }}
        </Query>

    )
}