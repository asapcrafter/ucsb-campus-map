# Live Demo: [UCSB Campus Map](https://asapcrafter.github.io/ucsb-campus-map/)
The site renders a map of the UCSB campus with custom styling and the ability to add user-made points on the map. 
### Description 
The app was created using MapBox GL JS and React. 
### MapBox Component
The initial coordinates of the map was set to Santa Barbara's location in the component state. 
``` javascript
const MapScene = () => {
    // MapBox react component
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-119.8499);
    const [lat, setLat] = useState(34.4118);
    const [zoom, setZoom] = useState(15.5);

    return (
        <div id='mapbox'>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}
```
### Custom Styling 
MapBox Studio allows for custom styling of the map. I decided to go with purple and green as the main coloring for the site. 
``` javascript
useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/asapcrafter/ckuuf5ndeqvr017pjaxtpgsra', // style URL
            center: [lng, lat],
            zoom: zoom
        });
    });
```
