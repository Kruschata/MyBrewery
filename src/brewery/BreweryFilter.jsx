import {useState} from "react";

const BreweryFilter = ({setFilter}) => {
    const [input, setInput] = useState('');

  const handleFilter = () => {
    setFilter(input);
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
      <button onClick={handleFilter}>Search</button>
    </div>
  )
}
export default BreweryFilter;