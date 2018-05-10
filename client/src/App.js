import React, { Component } from 'react';
import 'ol/ol.css'
import Map from 'ol/map'
import Tile from 'ol/layer/tile'
import OSM from 'ol/source/osm'
import BingMaps from 'ol/source/bingmaps'
import View from 'ol/view'
import Proj from 'ol/proj'
import logo from './logo.svg';
import styled from 'styled-components'

import {
  LayerTree
} from '@terrestris/react-geo'

import Digitalizacion from './tools/Digitalizacion'

const Container = styled.div`
  height:100vh;
  display:grid;
  grid-template-rows:50px auto;
`
const ContainerLayerTree = styled.div`
  position:absolute;
  top:56px;
  right:0;
  width:auto;
  z-index:1;
  background:white;
  box-shadow:0 10px 15px #cccc;
`
const MapDiv = styled.div`
  height:calc(100vh - 50px);
`
const Encabezado = styled.div`
  background:#fff000;
  box-shadow:0 8px 10px #ccc;
  font-family: 'Luckiest Guy', cursive;
  font-size:22px;
  line-height:50px;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.mapDivId = `map-${Math.random()}`
    const bingMapLayerRoad = bingMapLayer("Road", true);
    const bingMapLayerAereal = bingMapLayer("Aerial", false);
    const bingMapLayerAerialWithLabels = bingMapLayer(
      "AerialWithLabels",
      false
    );

    this.map = new Map({
      layers: [
        new Tile({
          name: 'OSM',
          source: new OSM(),
          visible: false
        }),
        bingMapLayerAereal,
        bingMapLayerRoad,
        bingMapLayerAerialWithLabels
      ],
      view: new View({
        projection: "EPSG:4326",
        center: [-79.504571, 9.034881],
        zoom: 8
      })
    })
  }
  componentDidMount() {
    this.map.setTarget(this.mapDivId)
  }
  render() {
    return (
      <Container>
        <Encabezado>gliberte Map</Encabezado>
        <MapDiv
          id={this.mapDivId}

        />
        <Digitalizacion map={this.map} />
        <ContainerLayerTree>
          <LayerTree map={this.map} />
        </ContainerLayerTree>



      </Container>
    );
  }
}

export default App;


function bingMapLayer(tipo, visible) {
  var bingMapLayer = new Tile({
    name: "BingMap (" + tipo + ")",
    title: "BingMap (" + tipo + ")",
    type: "base",
    source: new BingMaps({
      key:
        "AhH6Hkq6-CKdL8ma30smyvA5Z8vsNLba-leIdtTFbFM1gJI4Vyy5nh1gEZexQtxg",
      imagerySet: tipo
    }),
    visible: visible
  });
  //bingMapLayer.getSource().on('tileloadstart', spinerFunctionOn)
  //bingMapLayer.getSource().on('tileloadend', spinerFunctionOff)
  return bingMapLayer;
}