import styles from "./RulesContainer.module.css";
import DataContext from "../../context/DataContext";
import { useContext } from "react";

const RulesContainer = () => {
    let { showRules } = useContext(DataContext);

    let style = {
        height: showRules ? "fit-content" : "0px",
        visibility : showRules ? "visible" : "hidden"
    };

    return (
        <div className={`${styles.rules_container}`} style={style} >
            <h1>How to play dice game</h1>
            <ul>
                <li>Select any number</li>
                <li>Click on dice image</li>
                <li>
                    after click on dice if selected number is equal to dice
                    number you will get same point as dice
                </li>
                <li>if you get wrong guess then 2 point will be dedcuted</li>
            </ul>
        </div>
    );
};

export default RulesContainer;
