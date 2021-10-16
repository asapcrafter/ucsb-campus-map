import React from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

const MapScene = () => {
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhcGNyYWZ0ZXIiLCJhIjoiY2t1cnJyNXVpMGt3ZDJub2RhYWUwMXFmOCJ9.uGtKs3SkPq5kvpSC8xXMdQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-119.847, 34.413 ], // starting position [lng, lat]
        zoom: 15 // starting zoom
    });

    return null;
}

export default MapScene;
