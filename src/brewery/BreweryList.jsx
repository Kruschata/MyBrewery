import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const BreweryList = ({filter, randomTrigger,  onBreweryDataFetched, toggleFavorites,showOnMap,favorites,page }) => {
    const [breweries, setBreweries] = useState([]);
    const [error, setError] = useState("");


    useEffect(() => {
        if (randomTrigger > 0) {

            fetch("https://api.openbrewerydb.org/v1/breweries/random") //returns a Promise
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Error fetching data: ' + response.status);
                    }
                }) //Promise -> json Data
                .then((data) => {
                    setBreweries(data);
                    onBreweryDataFetched(data);
                })
                .catch(error => {
                    setError(error);
                    console.log(error);
                })


        } else if (filter && filter.length > 2) {
            //https://api.openbrewerydb.org/v1/breweries?by_country=" +filter + "&by_type=micro&by_" with & you can add multiple filters
            fetch("https://api.openbrewerydb.org/v1/breweries?by_country=" + filter + "&page=" + page) //returns a Promise
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Error fetching data: ' + response.status);
                    }
                }) //Promise -> json Data
                .then((data) => {
                    setBreweries(data);
                    onBreweryDataFetched(data);
                })
                .catch(error => {
                    setError(error);
                    console.log(error);
                })

        } else {
            fetch("https://api.openbrewerydb.org/v1/breweries?page=" + page) //returns a Promise
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Error fetching data: ' + response.status);
                    }
                }) //Promise -> json Data
                .then((data) => {
                    setBreweries(data);
                     onBreweryDataFetched(data);
                     console.log(data);

                })
                .catch(error => {
                    setError(error);
                    console.log(error);
                })
        }
    }, [filter, randomTrigger,page]);





    return (

        <div className="container mt-4">
            <div className="card">
                <div className="card-body p-0">
                    <div
                        className="table-responsive"
                        style={{ maxHeight: '500px', overflowY: 'auto' }}
                    >
                        <table className="table table-sm table-striped table-hover">
                            <thead className="table-light sticky-top">
                            <tr>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Website</th>
                                <th>Type</th>
                                <th>Map</th>
                                <th>Favorize</th>
                            </tr>
                            </thead>
                            <tbody>
                            {breweries.map(brewery => (
                                <tr key={brewery.id}>
                                    <td>
                                        <Link to={`/details/${brewery.id}`} className="text-decoration-none">
                                            <p>{brewery.name}</p>
                                        </Link>
                                    </td>
                                    <td>{brewery.country}</td>
                                    <td>
                                        {brewery.website_url ? (
                                            <a
                                                href={brewery.website_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Visit site
                                            </a>
                                        ) : (
                                            <span className="text-muted">No website</span>
                                        )}
                                    </td>
                                    <td>{brewery.brewery_type}</td>
                                    <td>
                                        {brewery.longitude != null && brewery.latitude != null ? (
                                            <button
                                                onClick={() => showOnMap(brewery.latitude, brewery.longitude, 15)}
                                                className="btn btn-outline-dark btn-sm"
                                            >
                                                Show on map
                                            </button>
                                        ) : (
                                            <span className="text-muted" >Unavailable</span>

                                        )}
                                    </td>

                                    <td>
                                        <input
                                            type={"checkbox"}
                                            checked={favorites.some(fav => fav.id === brewery.id)}
                                            onChange={() => toggleFavorites(brewery)}
                                        />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <p>Current page: {page}</p>
        </div>


    )
}

export default BreweryList;