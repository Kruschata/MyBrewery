import { Link, NavLink } from "react-router-dom";
import logo from "../brewery/pictures/logo.png";

const NavigationBar = () => {
    return (
        <nav className="navbar bg-navbar">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="Logo" style={{ maxHeight: "100px" }} className="text-start" />
                </NavLink>

                <span className="display-6 fw-bold text-center">MyBrewery</span>

                <div>
                    <NavLink to="/" className="btn btn-outline-dark me-2">
                        Home
                    </NavLink>

                    <NavLink to="/about" className="btn btn-outline-dark">
                        About
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
