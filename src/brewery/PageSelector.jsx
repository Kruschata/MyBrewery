import {useState} from "react";

const PageSelector = ({setPage,page,breweries,inputFieldPage,setInputFieldPage}) => {



    const handlePageSelection = () => {
        setPage(inputFieldPage);
    }

    const pageBack = () => {
        if (page === 1) {
            return 1;
        } else {
            setPage(page - 1);
            setInputFieldPage(prev => prev - 1);
        }
    };

    const pageFront = () => {
        if (breweries.length !== 50) {
            return 1;
        }else {
            setPage(prev => prev +1 );
            setInputFieldPage(prev => prev + 1);
        }

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handlePageSelection();
        }

    }

    return (
        <div>
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
                    value={inputFieldPage}
                    disabled={breweries.length === 1}
                    onChange={e => setInputFieldPage(Number(e.target.value))}
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
            <br/>

            <div>
                <button
                    className="btn btn-outline-dark w-50"
                    onClick={handlePageSelection}
                    Enter
                >
                    Enter
                </button>
            </div>

        </div>


    )
}
export default PageSelector;