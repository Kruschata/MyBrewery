const BreweryRandom = ({setRandom}) =>{


    return (
        <div>
           <l>Don't know what to drink? Use our Randomizer!     </l>
            <button  onClick={() => {
                setRandom();
            }} className="btn btn-outline-dark">I am thirsty!</button>
        </div>

    )
}
export default BreweryRandom;