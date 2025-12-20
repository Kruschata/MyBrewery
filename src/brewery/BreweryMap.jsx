import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
    Map, TileLayer, Marker, Popup
} from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const BreweryMap = ({ breweries, latitude, longitude, zoom }) => {

    useEffect(() => {
        const map = L.map('map').setView([latitude, longitude], zoom);

        let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });

        L.Marker.prototype.options.icon = DefaultIcon;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        breweries.forEach((brewery) => {
            if (brewery.latitude !== null && brewery.longitude !== null) {
                L.marker([brewery.latitude, brewery.longitude])
                    .addTo(map)
                    .bindPopup(`<b>${brewery.name}</b><br>${brewery.city}`);
            }
        });

        return () => {
            map.remove();
        };
    }, [breweries, latitude, longitude, zoom]);

    return (
        <div className="container mt-4">
            <div
                id="map"
                className="border rounded shadow-sm"
                style={{ height: '500px', width: '600px'}}
            ></div>
        </div>
    );
};

export default BreweryMap;
