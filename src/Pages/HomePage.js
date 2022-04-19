import { Link } from "react-router-dom";
import Map from "../components/Map/Map";

export default function HomePage() {
    return (
        <div>
            Home Page
            <div>
                <Map />
            </div>
            <Link to="/menu">menu link</Link>
        </div>

    );
}