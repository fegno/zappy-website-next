import React from 'react';
import style from './Map.module.scss';
import { GoogleMap , LoadScript , Marker } from '@react-google-maps/api';

const Map = () => {
    const center = {
        lat:23, 
        lng: 30, 
    };
    const mapContainerStyle = {
        width: '100%',
        height: '400px',
      };
    const handleMarkerClick = () => {
        // Handle marker click event
    };

    return (
        <div>
            <div>
                <LoadScript googleMapsApiKey="AIzaSyD77m6hvWdU1-3Bxzi1wQBQkQcmH_qPF6I">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker position={center} onClick={handleMarkerClick} />
                </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}

export default Map;
