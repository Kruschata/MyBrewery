import logo from "../brewery/pictures/logo.png";

const NavigationBar = () => {
/*  https://getbootstrap.com/docs/5.3/components/navbar */
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#FDF1A9" }}>
            <div className="container">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="Logo" style={{ maxHeight: "100px" }}/>
                </a>
                <span className="navbar-brand mb-0 h1">MyBrewery</span>
                <button>Home</button>
                <button>Favourites</button>
                <button>About</button>

            </div>
        </nav>
    )
}

export default NavigationBar;