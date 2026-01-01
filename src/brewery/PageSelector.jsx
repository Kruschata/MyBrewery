import {useState} from "react";

const PageSelector = ({setPage,page,breweries}) => {
    const [input, setInput] = useState(1);


    const handlePageSelection = () => {
        setPage(input);
    }

    const pageBack = () => {
        if (page === 1) {
            return 1;
        } else {
            setPage(page - 1);
        }
    };

    const pageFront = () => {
        if (breweries.length !== 50) {
            return 1;
        }else {
            setPage(prev => prev +1 );
        }

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handlePageSelection();
        }
        if(e.key === 'ArrowDown') {
            handlePageSelection();
            pageBack();
        }
        if (e.key === 'ArrowUp') {
            handlePageSelection();
            pageFront();
        }
    }

    return (
        <div>
            <button
                className="btn btn-outline-dark"
                onClick={pageBack}
                disabled={page <= 1}
            >
                Page Back
            </button>
            <l>    </l>
            <input
                type="number"
                min={1}
                max={breweries.length < 50 ? page : undefined}
                placeholder="1,2,3 ..."
                value={input}
                onChange={e => setInput(Number(e.target.value))}
                onKeyDown={handleKeyDown}
            />
            <l>    </l>
            <button
                className="btn btn-outline-dark"
                onClick={pageFront}
                disabled={breweries.length < 50}
            >
                Next Page
            </button>
        </div>


    )
}
export default PageSelector;