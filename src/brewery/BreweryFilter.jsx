import {useState} from "react";

const BreweryFilter = ({setFilter, setRandomTrigger}) => {

    const [input, setInput] = useState('');

    const resetFilter = () => {
        setFilter("");
        setRandomTrigger(0);
    }

    const handleFilter = () => {
        setFilter(input);
        setRandomTrigger(0);

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
                placeholder="Filter..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown} // Event Listener für die "Enter"-Taste
            />
            <l>    </l>
            <button onClick={handleFilter} className="btn btn-outline-dark">Search</button>
            <l>    </l>
            <button onClick={resetFilter} className={"btn btn-outline-danger"}>Reset</button>

        </div>
    )
}
export default BreweryFilter;