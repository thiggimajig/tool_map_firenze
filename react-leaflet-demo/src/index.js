//followed this tutorial with a bit of cleanup from the react crash course youtube video www.smashingmagazine.com/2020/02/javascript-maps-react-leaflet/  
//important react app or component
import React from 'react';
//important react dom app or component
import ReactDOM from 'react-dom';
//for styling of the page
import './index.css';
//shows what will be injected into the DOM/html or main index page
import App from './App'; 

ReactDOM.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);



