import Header from "./Header/Header";
import Dice from './Dice/Dice'
import ResetScoreBtn from "./ResetScore/ResetScoreBtn";
import ShowRulesBtn from "./ShowRules/ShowRulesBtn";
import RulesContainer from "./RulesContainer/RulesContainer";

// import DataContext from "../context/DataContext";
// import { useContext } from "react";

const GamePage = () => {
    // let { error } = useContext(DataContext);

    return (
        <div className="container game_page">
            <Header/>
            <main>
                  <div className="dice_container" >
                        <Dice/>
                        <label>Click on Dice to roll</label>
                  </div>

            </main>
            <ResetScoreBtn/>
            <ShowRulesBtn/>
            <RulesContainer/>
        </div>
    );
};

export default GamePage;
