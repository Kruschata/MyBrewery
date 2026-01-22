import {useState} from "react";

const BreweryFilterAndReset = ({setFilter, setRandomTrigger,setLatitude,setLongitude,setZoom,setPage,setInputField}) => {

    const [inputCountry, setInput] = useState('');

    const resetFilter = () => {
        setFilter("");
        setInput('');
        setRandomTrigger(0);
        setLongitude(1);
        setLatitude(1);
        setZoom(1);
        setPage(1);
        setInputField(1);
    }

    const handleFilter = () => {
        setFilter(inputCountry);
        setRandomTrigger(0);
        setPage(1);

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleFilter();
        }

    }

    return (
        <div>
            <input
                type="text"
                placeholder="Filter by country..."
                value={inputCountry}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="me-2"
            />
            <button onClick={handleFilter} className="btn btn-outline-dark me-2">Search</button>

            <button onClick={resetFilter} className="btn btn-outline-danger me-2">Reset</button>
        </div>
    )
}
export default BreweryFilterAndReset;