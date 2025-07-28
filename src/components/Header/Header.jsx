import DataContext from "../../context/DataContext";
import { useContext } from "react";
import Score from "../Score/Score";
import Value from "../UserInput/Value";

const Header = () => {
    let { error } = useContext(DataContext);

    return (
        <header>
            <Score />
            <div className="user_input">
                {error && (
                    <p className="error_msg">
                        You have not selected any Number
                    </p>
                )}
                <div id="values">
                    <Value value="1" />
                    <Value value="2" />
                    <Value value="3" />
                    <Value value="4" />
                    <Value value="5" />
                    <Value value="6" />
                </div>
                <label htmlFor="values">Select Number</label>
            </div>
        </header>
    );
};

export default Header;
