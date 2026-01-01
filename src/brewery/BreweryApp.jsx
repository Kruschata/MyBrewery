import BreweryList from "./BreweryList";
import BreweryFilterAndReset from "./BreweryFilterAndReset";
import React, {useState} from "react";
import BreweryRandom from "./BreweryRandom";
import NavigationBar from "./NavigationBar";
import BreweryMap from "./BreweryMap";
import BreweryFavorites from "./BreweryFavorites";
import PageSelector from "./PageSelector";

const BreweryApp = () => {
    const [filter, setFilter] = useState('');
    const [randomTrigger, setRandomTrigger] = useState(0);
    const [breweries, setBreweryData] = useState([]);
    const [latitude, setLatitude] = useState(1);
    const [longitude, setLongitude] = useState(1);
    const [zoom, setZoom] = useState(2);
    const [favorites, setFavorites] = useState([]);
    const [page, setPage] = useState(1);

    const handleRandomClick = () => {
        setRandomTrigger(prev => prev + 1);
    };

    const handleBreweryDataFetched = (data) => {
        setBreweryData(data);
    };

    const toggleFavorites = (brewery) => {
        setFavorites(prevFavorites => {
                if (prevFavorites.some(fav => fav.id === brewery.id)) {
                    return prevFavorites.filter(fav => fav.id !== brewery.id);
                } else {
                    return [...prevFavorites, brewery];
                }
        });
    };

    /*
    Beispiel: .filter Methode
    const numbers = [1, 2, 3, 4, 5];
    const even = numbers.filter(num => num % 2 === 0);
    console.log(even); // [2, 4]
    liefert gefiltertes Array zurück

    Beispiel: .some Methode
    const numbers = [1, 3, 5, 7];
    numbers.some(n => n > 4);
    liefert true weil 5 und 7 größer als 4 sind
     */

    const showOnMap = (lat, lng, zoomLevel) => {
        setLatitude(lat);
        setLongitude(lng);
        setZoom(zoomLevel);
    };


    return (
        <div className="bg-light min-vh-100 w-100">
            <NavigationBar />


            <div className="container-fluid px-4 py-4">
                {/* Filter + Random */}
                <div className="card shadow-sm mb-4">
                    <div className="card-body">
                        <div className="row g-3 align-items-end">
                            <div className="col-12 col-xl-8">
                                <BreweryFilterAndReset
                                    setFilter={setFilter}
                                    setRandomTrigger={setRandomTrigger}
                                    setLatitude={setLatitude}
                                    setLongitude={setLongitude}
                                    setZoom={setZoom}
                                    setPage={setPage}
                                />
                            </div>
                            <div className="col-lg-4 text-lg-end">
                                <BreweryRandom setRandom={handleRandomClick} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row g-4 align-items-stretch">
                    {/* Brewery List */}
                    <div className="col-12 col-xl-7">
                        <div className="card shadow-sm h-100">
                            <div className="card-header bg-white fw-semibold">
                                Breweries
                            </div>
                            <div className="card-body p-0">
                                <BreweryList
                                    filter={filter}
                                    randomTrigger={randomTrigger}
                                    onBreweryDataFetched={handleBreweryDataFetched}
                                    setFavorites={setFavorites}
                                    toggleFavorites={toggleFavorites}
                                    showOnMap={showOnMap}
                                    favorites={favorites}
                                    page={page}
                                />
                            </div>
                            <div className="card-footer bg-white">
                                <PageSelector
                                    setPage={setPage}
                                    page={page}
                                    breweries={breweries}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="col-12 col-xl-5">
                        <div className="card shadow-sm h-100">
                            <div className="card-header bg-white fw-semibold">
                                Map
                            </div>
                            <div className="card-body p-2">
                                <BreweryMap
                                    breweries={breweries}
                                    latitude={latitude}
                                    longitude={longitude}
                                    zoom={zoom}
                                    favorites={favorites}
                                />
                            </div>
                            <div className="card-footer text-center text-muted small">
                                Markers are inaccurate when zoomed out
                            </div>
                        </div>
                    </div>
                </div>


                {/* Favorites */}
                <div className="card shadow-sm mt-5">
                    <div className="card-header bg-warning bg-opacity-25 fw-bold">
                        ⭐ Favorites
                    </div>
                    <div className="card-body">
                        {favorites.length === 0 ? (
                            <p className="text-muted mb-0">No favorites yet. Add some breweries ⭐</p>
                        ) : (
                            <BreweryFavorites
                                favorites={favorites}
                                toggleFavorites={toggleFavorites}
                                showOnMap={showOnMap}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BreweryApp;