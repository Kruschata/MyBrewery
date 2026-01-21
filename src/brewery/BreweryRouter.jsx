import {BrowserRouter, Route, Routes} from "react-router-dom";
import BreweryApp from "./BreweryApp";
import BreweryDetails from "./BreweryDetails";
import About from "./About";
import NavigationBar from "./NavigationBar";
import React from "react";

const BreweryRouter = () => {


    return (
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<BreweryApp />} />
                <Route path="details/:id" element={<BreweryDetails/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default BreweryRouter;