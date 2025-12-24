const BreweryFavorites = ({favorites, showOnMap, toggleFavorites}) => {


    return (
        <div
            className="table-responsive"
            style={{ maxHeight: '500px', overflowY: 'auto' }}
        >
            <table className="table table-sm table-striped table-hover mb-0">
                <thead className="table-light sticky-top">
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Website</th>
                    <th>Type</th>
                    <th>Map</th>
                    <th>Unfavorize</th>
                </tr>
                </thead>
                <tbody>
                {favorites.map(brewery => (
                    <tr key={brewery.id}>
                        <td>{brewery.name}</td>
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
                                    onClick={() => showOnMap(brewery.latitude,brewery.longitude,15)}
                                    className="btn btn-outline-dark btn-sm"
                                >
                                    Show on map
                                </button>
                            ) : (
                                <span className="text-muted" >Unavailable</span>

                            )}
                        </td>
                        <td>
                            <button
                                onClick={() => toggleFavorites(brewery)}
                                className="btn btn-outline-dark btn-sm"
                            >
                                Unfavorize
                            </button>

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default BreweryFavorites;