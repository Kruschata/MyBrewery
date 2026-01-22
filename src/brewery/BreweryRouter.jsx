import {BrowserRouter, Route, Routes} from "react-router-dom";
import BreweryApp from "./BreweryApp";
import BreweryDetails from "./BreweryDetails";
import About from "./About";
import NavigationBar from "./NavigationBar";
import React, {useState} from "react";

const BreweryRouter = () => {
    const [favorites, setFavorites] = useState([]);

    return (
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<BreweryApp favorites={favorites} setFavorites={setFavorites}/>} />
                <Route path="details/:id" element={<BreweryDetails/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default BreweryRouter;