import BreweryList from "./BreweryList";
import BreweryFilter from "./BreweryFilter";
import {useState} from "react";
import BreweryRandom from "./BreweryRandom";

const BreweryApp = () => {
    const [filter, setFilter] = useState('');
    const [random,setRandom] = useState(false);

    const handleRandomClick = () => {
        setRandom(prevState => !prevState); // toggelt den Wert von random (true/false)
    };

    return(
    <div>
        <BreweryFilter setFilter = {setFilter}/>
        <BreweryRandom setRandom = {handleRandomClick()}/>
        <BreweryList filter={filter} random ={random} />
    </div>
)

}
export default BreweryApp;