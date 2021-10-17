import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; 
import './styles/css/map.css'

const MapScene = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhcGNyYWZ0ZXIiLCJhIjoiY2t1cnJyNXVpMGt3ZDJub2RhYWUwMXFmOCJ9.uGtKs3SkPq5kvpSC8xXMdQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/asapcrafter/ckuuf5ndeqvr017pjaxtpgsra', // style URL
        center: [-119.847, 34.413 ], // starting position [lng, lat]
        zoom: 15 // starting zoom
    });

    return null;
}

export default MapScene;
