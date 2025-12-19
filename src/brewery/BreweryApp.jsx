import BreweryList from "./BreweryList";
import BreweryFilter from "./BreweryFilter";
import {useState} from "react";
import BreweryRandom from "./BreweryRandom";
import NavigationBar from "./NavigationBar";
import BreweryMap from "./BreweryMap";

const BreweryApp = () => {
    const [filter, setFilter] = useState('');
    const [randomTrigger, setRandomTrigger] = useState(0);
    const [breweries, setBreweryData] = useState([]);
    const handleRandomClick = () => {
        setRandomTrigger(prev => prev + 1);
    };
    const handleBreweryDataFetched = (data) => {
        setBreweryData(data); // Setze die Brauerei-Daten im State
    };
    return (
        <div>
            <NavigationBar></NavigationBar>
            <p/>
            <BreweryFilter setFilter={setFilter} setRandomTrigger={setRandomTrigger}/>
            <br/>
            <BreweryRandom
                setRandom={handleRandomClick}/> {/*Funktion ohne Klammern* handleRandomClick() läuft bei jedem Render*/}
            <BreweryList filter={filter} randomTrigger={randomTrigger} onBreweryDataFetched={handleBreweryDataFetched}/>
            <BreweryMap breweries={breweries}></BreweryMap>
        </div>
    )

}
export default BreweryApp;