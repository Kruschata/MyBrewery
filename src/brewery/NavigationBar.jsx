import logo from "../brewery/pictures/logo.png";

const NavigationBar = () => {
/*  https://getbootstrap.com/docs/5.3/components/navbar */
    return (
        <nav className="navbar bg-warning bg-opacity-25" >
            <div className="container">
                <a className="navbar-brand">
                    <img src={logo} alt="Logo" style={{maxHeight: "100px"}}/>
                </a>

               <span className="display-6 fw-bold text-center">MyBrewery</span>

                <div>
                    <button className="btn btn-outline-dark">Home</button>
                    <l>     </l>
                    <button className="btn btn-outline-dark">About</button>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;