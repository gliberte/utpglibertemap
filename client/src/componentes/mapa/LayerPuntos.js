import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { Layer, Feature } from 'react-mapbox-gl'
import { GET_PUNTOS_POR_EMPRESA } from '../../query/query'


export default () => {
    return (
        <Query
            query={GET_PUNTOS_POR_EMPRESA}
            pollInterval={500}
        >
            {({ loading, error, data }) => {
                if (loading) return null
                if (error) return null
                return (
                    <Layer type="circle">
                        {data.puntosEmpresaActual.map(punto => {
                            return (
                                <Feature key={punto.id} coordinates={punto.geom.coordinates} />

                            )
                        })}

                    </Layer>
                )
            }}
        </Query>

    )
}