import React, {useState} from "react";
import {Mapcontainer, TileLayer, Marker, Popup, MapContainer} from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet";
//import * as listingData from "./data/listingflorencelistingsjan275002162022.json"; //we'll want to use airbnb data here, we did after fixing json 
//do i need to export something for listingData? I think it's working because I see marker data in the html i think it's just too large and potentially error is a bug in react idk saw edge case for "_" files in stackoverflow
//not relying on 3rd party apps, reading json myself so no weird react error
let listingData = require('./data/listingflorencelistingsjan275002162022.json');
//console.log(listingData.listings[0].longitude);
function App() {
  const [activeListing, setActiveListing] = useState(null);
  const icon = new Icon({
    iconUrl: "../public/hotel_1.svg",
    iconSize: [15,15]
  });
 
  //return (<div> hello!</div>);
  //make this florence coordinates, made actual florence because subset of listings may not be in sant ambrogio
  return (
    <MapContainer center={[43.7696, 11.2558]} zoom={20}scrollWheelZoom={false}>  
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    {listingData.listings.map(listing => (
      //loop through length of json listings, the count represented by variable i, will all each element to be accessed
      <Marker
        key={listing.id}
        position={[
          listing.latitude,
          listing.longitude
        ]}
        onClick = {() => {
          setActiveListing(listing);
        }}
        icon={icon}
      />
    ))}
    
    {activeListing && (
      <Popup
        position={[
          activeListing.latitude,
          activeListing.longitude
        ]}
        onClose={() => {
          setActiveListing(null);
        }}
        >
          <div>
            <h2>{activeListing.name}</h2>
            <p>{activeListing.host_total_listings_count}, {activeListing.price}, {activeListing.listing_url}</p>
          </div>
        </Popup>
    )}

    </MapContainer>
  );
}

export default App;
