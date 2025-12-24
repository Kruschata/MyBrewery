import BreweryList from "./BreweryList";
import BreweryFilterAndReset from "./BreweryFilterAndReset";
import React, {useState} from "react";
import BreweryRandom from "./BreweryRandom";
import NavigationBar from "./NavigationBar";
import BreweryMap from "./BreweryMap";
import BreweryFavorites from "./BreweryFavorites";

const BreweryApp = () => {
    const [filter, setFilter] = useState('');
    const [randomTrigger, setRandomTrigger] = useState(0);
    const [breweries, setBreweryData] = useState([]);
    const [latitude, setLatitude] = useState(1);
    const [longitude, setLongitude] = useState(1);
    const [zoom, setZoom] = useState(2);
    const [favorites, setFavorites] = useState([]);

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
        <div>
            <NavigationBar />
            {/* Mt ... Höhe */}
            <div className="container mt-3">
                <BreweryFilterAndReset
                    setFilter={setFilter}
                    setRandomTrigger={setRandomTrigger}
                    setLatitude={setLatitude}
                    setLongitude={setLongitude}
                    setZoom={setZoom}
                />

                <div className="mt-3">
                    <BreweryRandom setRandom={handleRandomClick}/>
                </div>

                {/* row... macht Reihe */}
                <div className="row g-1">

                    {/* col.. Spalte    lg...  Breite */}
                    <div className="col-lg-8">
                        <BreweryList
                            filter={filter}
                            randomTrigger={randomTrigger}
                            onBreweryDataFetched={handleBreweryDataFetched}
                            setFavorites={setFavorites}
                            toggleFavorites={toggleFavorites}
                            showOnMap={showOnMap}
                            favorites={favorites}
                        />
                    </div>

                    <div className="col-lg-4">
                        <BreweryMap breweries={breweries}
                                    latitude={latitude}
                                    longitude={longitude}
                                    zoom={zoom}/>

                    </div>


                </div>
                <p>Info: Markers are inacurrate when zoomed out. </p>
                <div className="row g-1">
                    <BreweryFavorites
                        favorites ={favorites}
                        toggleFavorites={toggleFavorites}
                        showOnMap={showOnMap}
                    />
                </div>
            </div>
        </div>
    );


}
export default BreweryApp;