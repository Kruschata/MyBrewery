import {useState} from "react";

const BreweryFilterAndReset = ({setFilter, setRandomTrigger,setLatitude,setLongitude,setZoom,setPage,setInputField}) => {

    const [input, setInput] = useState('');

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
        setFilter(input);
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
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <l>    </l>
            <button onClick={handleFilter} className="btn btn-outline-dark">Search</button>
            <l>    </l>
            <button onClick={resetFilter} className="btn btn-outline-danger">Reset</button>
        </div>
    )
}
export default BreweryFilterAndReset;