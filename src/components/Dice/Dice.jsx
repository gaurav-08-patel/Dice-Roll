import styles from "./Dice.module.css";
import DataContext from "../../context/DataContext";
import { useContext, useState } from "react";

const Dice = () => {
    let [diceImgSrc, setDiceImgSrc] = useState(
        "../../../public/img/dice_2.png"
    );
    // let diceNum=0;
    let diceNum;
    let randomNum = () => {
        return Math.floor(Math.random() * 6);
    };
    let { userValue,setUserValue ,score,setScore, setError } = useContext(DataContext);

    let rollDice = async () => {

        if (!userValue) {
            return setError(true);
        } else {
            diceNum = randomNum() + 1;

            setDiceImgSrc(`../../../public/img/dice_${diceNum}.png`);
            clacScore(diceNum);
        }
    };

    let clacScore = (num) => {
        
        if (num === parseInt(userValue)) {
            setScore(score + parseInt(userValue));
        }else{
          setScore(score - 2);
        }
        setUserValue(null)
    };

    // setUserValue(null);
    return (
        <img
            src={diceImgSrc}
            alt="dice"
            className={`${styles.dice}`}
            onClick={() => {
                rollDice();
                
            }}
        />
    );
};

export default Dice;
