import logo from "../brewery/pictures/logo.png";

const NavigationBar = () => {
/*  https://getbootstrap.com/docs/5.3/components/navbar */
    return (
        <nav className="navbar navbar-expand-lg bg-warning bg-opacity-25" >
            <div className="container justify-content-between">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" style={{maxHeight: "100px"}}/>
                </a>

               <span className="display-6 fw-bold text-center">MyBrewery</span>

                <div>
                    <button className="btn btn-outline-dark me-2">Home</button>
                    <button className="btn btn-outline-dark">About</button>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;