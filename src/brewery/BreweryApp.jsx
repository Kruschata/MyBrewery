import BreweryList from "./BreweryList";
import BreweryFilter from "./BreweryFilter";
import {useState} from "react";
import BreweryRandom from "./BreweryRandom";

const BreweryApp = () => {
    const [filter, setFilter] = useState('');
    const [randomTrigger, setRandomTrigger] = useState(0);

    const handleRandomClick = () => {
        setRandomTrigger(prev => prev + 1);
    };

    return(
    <div>
        <BreweryFilter setFilter = {setFilter}/>
        <br/>
        <BreweryRandom setRandom = {handleRandomClick}/> {/*Funktion ohne Klammern* handleRandomClick() läuft bei jedem Render*/}
        <BreweryList filter={filter} randomTrigger ={randomTrigger} />
    </div>
)

}
export default BreweryApp;