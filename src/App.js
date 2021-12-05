import React from 'react';
import './styles/css/map.css';
import MapScene from './MapScene'

function App() {

	return (
		<div className="App">
			<div id="header-wrapper">
				<div id="header">UCSB Campus Map</div>
			</div>
			<div id="mapbox-wrapper">
				<MapScene />
			</div>
		</div>
	);
}

export default App;
