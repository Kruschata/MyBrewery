import React, {useEffect, useState} from "react";
import BreweryList from "./BreweryList";
import BreweryFilterAndReset from "./BreweryFilterAndReset";
import BreweryRandom from "./BreweryRandom";
import BreweryMap from "./BreweryMap";
import BreweryFavorites from "./BreweryFavorites";
import PageSelector from "./PageSelector";

const BreweryApp = () => {
    const [filter, setFilter] = useState("");
    const [randomTrigger, setRandomTrigger] = useState(0);
    const [breweries, setBreweryData] = useState([]);
    const [latitude, setLatitude] = useState(1);
    const [longitude, setLongitude] = useState(1);
    const [zoom, setZoom] = useState(1);
    const [favorites, setFavorites] = useState([]);
    const [page, setPage] = useState(1);
    const [inputFieldPage, setInputFieldPage] = useState(1);

    const handleRandomClick = () => setRandomTrigger(p => p + 1);

    const handleBreweryDataFetched = data => setBreweryData(data);

    useEffect(() => {
        const saved = localStorage.getItem("favorites");
        if (saved) setFavorites(JSON.parse(saved));
    }, []);

    const toggleFavorites = brewery => {
        setFavorites(prev =>
            prev.some(f => f.id === brewery.id)
                ? prev.filter(f => f.id !== brewery.id)
                : [...prev, brewery]
        );
    };


    const showOnMap = (lat, lng, zoomLevel) => {
        setLatitude(lat);
        setLongitude(lng);
        setZoom(zoomLevel);
    };

    return (
        <div>
            <div className="px-4 py-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <BreweryFilterAndReset
                                    setFilter={setFilter}
                                    setRandomTrigger={setRandomTrigger}
                                    setLatitude={setLatitude}
                                    setLongitude={setLongitude}
                                    setZoom={setZoom}
                                    setPage={setPage}
                                    setInputField={setInputFieldPage}
                                />
                            </div>
                            <div className="col text-end">
                                <BreweryRandom setRandom={handleRandomClick}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-stretch">
                    <div className="col-7 d-flex">
                        <div className="card h-100 w-100">
                            <div className="card-header bg-white fw-semibold">
                                Breweries
                            </div>
                            <div className="card-body p-0">
                                <BreweryList
                                    filter={filter}
                                    randomTrigger={randomTrigger}
                                    onBreweryDataFetched={handleBreweryDataFetched}
                                    toggleFavorites={toggleFavorites}
                                    favorites={favorites}
                                    showOnMap={showOnMap}
                                    page={page}
                                />
                            </div>
                            <PageSelector
                                setPage={setPage}
                                page={page}
                                breweries={breweries}
                                inputFieldPage={inputFieldPage}
                                setInputFieldPage={setInputFieldPage}
                            />
                        </div>
                    </div>

                    <div className="col-5 d-flex">
                        <div className="card h-100 w-100">
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
                        </div>
                    </div>
                </div>

                <div className="card mt-5">
                    <div className="card-header fw-bold">Favorites</div>
                    <div className="card-body">
                        <BreweryFavorites
                            favorites={favorites}
                            toggleFavorites={toggleFavorites}
                            showOnMap={showOnMap}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
        ;
};

export default BreweryApp;
