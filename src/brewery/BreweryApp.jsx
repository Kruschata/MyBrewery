import BreweryList from "./BreweryList";
import BreweryFilterAndReset from "./BreweryFilterAndReset";
import {useState} from "react";
import BreweryRandom from "./BreweryRandom";
import NavigationBar from "./NavigationBar";
import BreweryMap from "./BreweryMap";

const BreweryApp = () => {
    const [filter, setFilter] = useState('');
    const [randomTrigger, setRandomTrigger] = useState(0);
    const [breweries, setBreweryData] = useState([]);
    const [latitude, setLatitude] = useState(1);
    const [longitude, setLongitude] = useState(1);
    const [zoom, setZoom] = useState(2);

    const handleRandomClick = () => {
        setRandomTrigger(prev => prev + 1);
    };

    const handleBreweryDataFetched = (data) => {
        setBreweryData(data);
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
                    <BreweryRandom setRandom={handleRandomClick} />
                </div>

                {/* row... macht Reihe */}
                <div className="row g-1">

                    {/* col.. Spalte    lg...  Breite */}
                    <div className="col-lg-8">
                        <BreweryList
                            filter={filter}
                            randomTrigger={randomTrigger}
                            onBreweryDataFetched={handleBreweryDataFetched}
                            setLatitude={setLatitude}
                            setLongitude={setLongitude}
                            setZoom={setZoom}
                        />
                    </div>

                    <div className="col-lg-4">
                        <BreweryMap
                            breweries={breweries}
                            latitude={latitude}
                            longitude={longitude}
                            zoom={zoom}
                        />
                    </div>
                </div>
            </div>
        </div>
    );


}
export default BreweryApp;