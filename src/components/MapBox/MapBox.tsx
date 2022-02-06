/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import * as React from 'react';
import Map, { Marker } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
    require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const MapBox = () => {
    const mapBoxKey = process.env.REACT_APP_MAPBOX_KEY || '';
    const latitude = 40.337483; // lindon, utah
    const longitude = -111.750738;

    return (
        // Made using Mapbox api
        <div>
            {mapBoxKey && (
                <Map
                    mapboxAccessToken={mapBoxKey}
                    initialViewState={{
                        latitude,
                        longitude,
                        zoom: 3,
                    }}
                    mapStyle="mapbox://styles/mapbox/dark-v10"
                    style={{
                        width: '100%',
                        height: 350,
                        marginTop: '40px',
                    }}
                >
                    <Marker
                        longitude={longitude}
                        latitude={latitude}
                        color="red"
                    />
                </Map>
            )}
        </div>
    );
};
export default MapBox;
