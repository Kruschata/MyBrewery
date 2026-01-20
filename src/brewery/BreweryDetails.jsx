import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BreweryDetails = () => {
    const { id } = useParams();
    const [brewery, setBrewery] = useState(null);

    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
            .then(res => res.json())
            .then(data => setBrewery(data));
    }, [id]);

    if (!brewery) {
        return <div className="p-4">Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2>{brewery.name}</h2>

            <p><strong>ID:</strong> {brewery.id}</p>
            <p><strong>Type:</strong> {brewery.brewery_type}</p>

            <p><strong>Street:</strong> {brewery.street || brewery.address_1}</p>
            <p><strong>Address 2:</strong> {brewery.address_2}</p>
            <p><strong>Address 3:</strong> {brewery.address_3}</p>

            <p><strong>City:</strong> {brewery.city}</p>
            <p><strong>State:</strong> {brewery.state || brewery.state_province}</p>
            <p><strong>Postal Code:</strong> {brewery.postal_code}</p>
            <p><strong>Country:</strong> {brewery.country}</p>

            <p><strong>Latitude:</strong> {brewery.latitude}</p>
            <p><strong>Longitude:</strong> {brewery.longitude}</p>

            <p><strong>Phone:</strong> {brewery.phone}</p>

            <p>
                <strong>Website:</strong>{" "}
                {brewery.website_url ? (
                    <a
                        href={brewery.website_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {brewery.website_url}
                    </a>
                ) : (
                    "—"
                )}
            </p>
        </div>

    );
};

export default BreweryDetails;
