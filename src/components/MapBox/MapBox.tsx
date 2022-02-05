import * as React from 'react';
import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = () => {
    const mapBoxKey = process.env.REACT_APP_MAPBOX_KEY || '';
    const latitude = 40.337483;
    const longitude = -111.750738;

    return (
        // Made using Mapbox api
        <Map
            initialViewState={{
                latitude,
                longitude,
                zoom: 3,
            }}
            style={{
                width: '100%',
                height: 300,
                marginTop: '40px',
                borderRadius: '10px',
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={mapBoxKey}
        >
            <Marker longitude={longitude} latitude={latitude} color="red" />
        </Map>
    );
};
export default MapBox;
