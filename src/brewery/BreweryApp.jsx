import React, {useEffect, useState} from "react";
import BreweryList from "./BreweryList";
import BreweryFilterAndReset from "./BreweryFilterAndReset";
import BreweryRandom from "./BreweryRandom";
import BreweryMap from "./BreweryMap";
import BreweryFavorites from "./BreweryFavorites";
import PageSelector from "./PageSelector";

const BreweryApp = ({favorites,setFavorites}) => {
    const [filter, setFilter] = useState("");
    const [randomTrigger, setRandomTrigger] = useState(0);
    const [breweries, setBreweryData] = useState([]);
    const [latitude, setLatitude] = useState(1);
    const [longitude, setLongitude] = useState(1);
    const [zoom, setZoom] = useState(1);
    const [page, setPage] = useState(1);
    const [inputFieldPage, setInputFieldPage] = useState(1);

    const handleRandomClick = () => setRandomTrigger(p => p + 1);

    const handleBreweryDataFetched = data => setBreweryData(data);

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
            {/* px.. Abstand von Rand Links recht py... Abstand von Rand Oben unten */}
            <div className="px-2 py-4">
                {/*mb.. margin bottom, Abstand nach unten */}
                {/* Block 1 Filtern, Reset und Random*/}
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
                            {/* text-end... damit ganz seitlich */}
                            <div className="col text-end">
                                <BreweryRandom setRandom={handleRandomClick}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brewery List, PageSelector */}

                <div className="row align-items-stretch">
                    {/* Aufteilung der Reihe mit col Breweries und Map, d-flex ... damit die Blöcke nebeneinadner gleichgroß sind */}
                    <div className="col-7 d-flex">
                        <div className="card h-100 w-100">
                            <div className="card-header fw-bold">
                                Breweries
                            </div>
                            {/*p-0 ... Padding = 0 */}
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
                            <div className="card-header fw-bold">
                                Map
                            </div>
                            <div className="card-body p-0">
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

                {/*3. Block Favoriten*/}
                <div className="card mt-3">
                    <div className="card-header bg-gold fw-bold">Favorites</div>
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
