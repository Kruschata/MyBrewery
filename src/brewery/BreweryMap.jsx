import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const BreweryMap = ({ breweries, latitude,longitude,zoom,favorites}) => {

    useEffect(() => {
        let map = L.map("map").setView([latitude,longitude],zoom);
        breweries.forEach(brewery => {
            if (breweries.length === 1 && brewery.latitude != null && brewery.longitude != null) {
                map.remove();
                map = L.map("map").setView([brewery.latitude, brewery.longitude],15);
            }
        })

    // Standardmarker Icon anlegen
    const DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    //es gibt eine eigene URL für Farben
    const redIcon = new L.Icon({
            iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
            shadowUrl: iconShadow
        });


        // Map Hintergrund anlegen
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

        breweries.forEach((brewery) => {
            if (brewery.latitude !== null && brewery.longitude !== null) {
                L.Marker.prototype.options.icon = DefaultIcon;
                L.marker([brewery.latitude, brewery.longitude])
                    .addTo(map)
                    .bindPopup(`<b>${brewery.name}</b><br>${brewery.city}`);
            }
        });
        favorites.forEach(favorite => {
            if (favorite.latitude !== null && favorite.longitude !== null) {
                L.Marker.prototype.options.icon = redIcon;
                L.marker([favorite.latitude,favorite.longitude])
                    .addTo(map)
                    .bindPopup(`<b>${favorite.name}</b><br>${favorite.city}`);
            }
        })


        return () => {
            map.remove();
        };
    }, [breweries,latitude,longitude,zoom,favorites]);

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
