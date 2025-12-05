import {useEffect, useState} from "react";

const BreweryList = ({filter, random}) => {
    const [breweries, setBreweries] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        if (random) {
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
                })
                .catch(error => {
                    setError(error);
                    console.log(error);
                })

        } else if (filter && filter.length > 2) {
            //https://api.openbrewerydb.org/v1/breweries?by_country=" +filter + "&by_type=micro&by_" with & you can add multiple filters
            fetch("https://api.openbrewerydb.org/v1/breweries?by_country=" + filter) //returns a Promise
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Error fetching data: ' + response.status);
                    }
                }) //Promise -> json Data
                .then((data) => {
                    setBreweries(data);
                })
                .catch(error => {
                    setError(error);
                    console.log(error);
                })

        } else {
            fetch("https://api.openbrewerydb.org/v1/breweries") //returns a Promise
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Error fetching data: ' + response.status);
                    }
                }) //Promise -> json Data
                .then((data) => {
                    setBreweries(data);
                })
                .catch(error => {
                    setError(error);
                    console.log(error);
                })
        }
    }, [filter, random])


    return (
        <div>
            <h1>Brewery API</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Website</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {breweries.map(brewery =>
                    <tr>
                        <td>{brewery.name}</td>
                        <td>{brewery.country}</td>
                        <td>
                            {/* Wenn die website_url vorhanden ist, dann Link anzeigen */}
                            {brewery.website_url ? (
                                <a
                                    href={brewery.website_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {brewery.website_url}
                                </a>
                            ) : (
                                "No website available"
                            )}
                        </td>
                        <td>{brewery.brewery_type}</td>
                    </tr>
                )
                }
                </tbody>
            </table>
        </div>
    )
}

export default BreweryList;