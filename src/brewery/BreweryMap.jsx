import React, {useEffect} from 'react';
import L from 'leaflet';

// Leaflet CSS importieren
import 'leaflet/dist/leaflet.css';

const BreweryMap = ({breweries}) => {

    useEffect(() => {
        // Karte erstellen und auf den angegebenen Standort setzen
        const map = L.map('map').setView([46.912915905258, 15.45518681346], 1);

        // OpenStreetMap Tile Layer hinzufügen
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

         breweries.forEach((brewery) => {
        if (brewery.latitude !== null && brewery.longitude !== null) {
            L.marker([brewery.latitude, brewery.longitude])
                .addTo(map)
                .bindPopup(`<b>${brewery.name}</b><br>${brewery.city}`);
        }
    });


        // Map bereinigen, wenn der Component unmountet
        return () => {
            map.remove();
        };
    }, [breweries]);

    return (
        <div id="map" style={
            {height: '300px'}}></div> // Höhe der Karte angeben
    );
};

export default BreweryMap;