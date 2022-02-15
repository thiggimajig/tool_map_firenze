import React, {useState} from "react";
import {Mapcontainer, TileLayer, Marker, Popup, MapContainer} from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet";
import * as strData from "./data/florence_listings_jan_27_500_2_15_2022.json"; //we'll want to use airbnb data here, csv to json, done preliminariliy at least 

function App() {
  //return (<div> hello!</div>);
  //make this florence coordinates - i did for sant'ambrogio
  return (
    <MapContainer center={[43.7715, 11.2666]} zoom={12}scrollWheelZoom={false}>  
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}

export default App;
