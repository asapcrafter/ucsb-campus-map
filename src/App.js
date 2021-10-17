import React, { useRef, useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import './styles/css/map.css'

function App() {
	// MapBox react component
	const mapContainer = useRef(null);
	const map = useRef(null);
	
	mapboxgl.accessToken ='pk.eyJ1IjoiYXNhcGNyYWZ0ZXIiLCJhIjoiY2t1cnJyNXVpMGt3ZDJub2RhYWUwMXFmOCJ9.uGtKs3SkPq5kvpSC8xXMdQ'

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/asapcrafter/ckuuf5ndeqvr017pjaxtpgsra', // style URL
			center: [-119.847, 34.413 ], // starting position [lng, lat]
			zoom: 15 // starting zoom
		});
	});

	return (
		<div className="App">
			<div ref={mapContainer} className="map-container" />
		</div>
	);
}

export default App;
