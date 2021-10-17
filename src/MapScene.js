import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; 
import './styles/css/map.css'

const MapScene = () => {
    // MapBox react component
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-119.8499);
    const [lat, setLat] = useState(34.4118);
    const [zoom, setZoom] = useState(15.5);

    mapboxgl.accessToken ='pk.eyJ1IjoiYXNhcGNyYWZ0ZXIiLCJhIjoiY2t1cnJyNXVpMGt3ZDJub2RhYWUwMXFmOCJ9.uGtKs3SkPq5kvpSC8xXMdQ'

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/asapcrafter/ckuuf5ndeqvr017pjaxtpgsra', // style URL
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div id='mapbox'>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default MapScene;
