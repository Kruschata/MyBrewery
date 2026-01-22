import {NavLink, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const BreweryDetails = () => {
    const { id } = useParams();
    const [brewery, setBrewery] = useState(null);

    // Brewery laden
    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
            .then((res) => res.json())
            .then((data) => setBrewery(data))
            .catch(console.error);
    }, [id]);

    // Karte initialisieren
    useEffect(() => {
        if (!brewery || !brewery.latitude || !brewery.longitude) return;

        const map = L.map("map").setView(
            [brewery.latitude, brewery.longitude],
            15
        );

        const DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow,
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        L.marker([brewery.latitude, brewery.longitude], { icon: DefaultIcon })
            .addTo(map)
            .bindPopup(`<b>${brewery.name}</b><br>${brewery.city}`);

        return () => map.remove();
    }, [brewery]);

    if (!brewery) return <div className="p-4">Loading...</div>;

    return (
        <div className="container mt-4">
            <div className="row g-4">

                {/* Brewery Details Card */}
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">{brewery.name}</h2>
                            <p className="card-text"><strong>ID:</strong> {brewery.id}</p>
                            <p className="card-text"><strong>Type:</strong> {brewery.brewery_type}</p>
                            <p className="card-text"><strong>Street:</strong> {brewery.street || brewery.address_1}</p>
                            <p className="card-text"><strong>City:</strong> {brewery.city}</p>
                            <p className="card-text"><strong>State:</strong> {brewery.state || brewery.state_province}</p>
                            <p className="card-text"><strong>Postal Code:</strong> {brewery.postal_code}</p>
                            <p className="card-text"><strong>Country:</strong> {brewery.country}</p>
                            <p className="card-text"><strong>Phone:</strong> {brewery.phone || "—"}</p>
                            <p className="card-text">
                                <strong>Website:</strong>{" "}
                                {brewery.website_url ? (
                                    <a href={brewery.website_url} target="_blank" rel="noreferrer">
                                        {brewery.website_url}
                                    </a>
                                ) : (
                                    "—"
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Map Card */}
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm d-flex align-items-center justify-content-center" style={{ minHeight: "400px" }}>
                        {brewery.latitude == null || brewery.longitude == null ? (
                            <div className="text-center text-muted" style={{ fontSize: "1.5rem" }}>
                                Sorry, no Map available :(
                            </div>
                        ) : (
                            <div id="map" style={{ width: "100%", height: "100%" }} />
                        )}
                    </div>
                </div>

                <NavLink to="/" className="btn btn-outline-dark me-2">
                    Home
                </NavLink>

            </div>
        </div>
    );
};

export default BreweryDetails;
