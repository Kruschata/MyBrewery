import BreweryList from "./BreweryList";
import BreweryFilter from "./BreweryFilter";
import {useState} from "react";
import BreweryRandom from "./BreweryRandom";
import NavigationBar from "./NavigationBar";

const BreweryApp = () => {
    const [filter, setFilter] = useState('');
    const [randomTrigger, setRandomTrigger] = useState(0);

    const handleRandomClick = () => {
        setRandomTrigger(prev => prev + 1);
    };

    return(
    <div>
        <NavigationBar></NavigationBar>
        <p/>
        <BreweryFilter setFilter = {setFilter} setRandomTrigger={setRandomTrigger}/>
        <br/>
        <BreweryRandom setRandom = {handleRandomClick} /> {/*Funktion ohne Klammern* handleRandomClick() läuft bei jedem Render*/}
        <BreweryList filter={filter} randomTrigger ={randomTrigger} setFilter={setFilter} setRandomTrigger={setRandomTrigger}/>
    </div>
)

}
export default BreweryApp;