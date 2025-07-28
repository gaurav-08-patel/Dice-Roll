import Button from "./Button/Button";
import { Link } from "react-router-dom";

const LandingPage = () => {
    
    return (
        <main className="container landing-page">
            <img
                src="/img/landing_dices.png"
                alt="dices"
                className="dices"
            />
            <div>
                <h1>DICE GAME</h1>
                <Link to="/play">
                    <Button title="Play Now" />
                </Link>
            </div>
        </main>
    );
};

export default LandingPage;
