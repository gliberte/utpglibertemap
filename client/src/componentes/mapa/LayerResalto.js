import React from 'react'
import styled from 'styled-components'
import { Layer, Feature } from 'react-mapbox-gl'

export default ({ feature }) => {

    return (
        <Layer
            id="layer_resalto"
            type="circle"
            paint={{
                "circle-radius": 9,
                "circle-color": "#1A237E",
                "circle-stroke-width": 1.5,
                "circle-stroke-color": "#455A64"
            }}
        >
            {feature &&
                <Feature
                    coordinates={feature.geometry.coordinates}
                    properties={feature.properties}
                />
            }

        </Layer>
    )


}