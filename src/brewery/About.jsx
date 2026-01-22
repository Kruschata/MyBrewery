import {NavLink} from "react-router-dom";

const About = () => {

    return (
        <div>
            <div>
                <h1>Brewery API by Lukas Krusch</h1>
                <p>Diese Website wurde im Rahmen des Software Engineering Unterichtes gemacht.</p>
                <h2>Funktionen der MyBrewery:</h2>
                <ul>
                    <li>Brauereien auflisten</li>
                    <li>Suchen und Filtern nach Brauereien</li>
                    <li>Die Brauereien werden dann in eine Map ausgegeben</li>
                    <li>Man kann auch jede Brauerei zu seinen Favoriten machen, diese werden dann in eine
                        Favorites-Liste
                        gespeichert
                    </li>
                    <li>Wenn man mal abenteuerisch ist, kann man durch den Random-Button eine zufällige Brauerei
                        finden
                    </li>
                    <li>Genießt Alkohol mit bedacht!</li>
                </ul>
            </div>
            <h1>Bekannt Bugs</h1>
            <p>Es sind einige Bugs bekannt, hauptsächlich durch fehlerhafte Datensätze von der Brewery API</p>
            <ul>
                <li>Germany ist in Meer, dies entspricht nicht der Realität</li>
            </ul>

            <NavLink to="/" className="btn btn-outline-dark me-2">
                Home
            </NavLink>
        </div>
    )
}
export default About;