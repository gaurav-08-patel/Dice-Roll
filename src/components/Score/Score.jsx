import styles from './Score.module.css';
import DataContext from "../../context/DataContext.jsx";
import { useContext } from "react";

const Score = () => {
    let { score } = useContext(DataContext);

    return (
        <div className={`${styles.score_container}`}>
            <div id={`${styles.score}`}>{score}</div>
            <label htmlFor="score">Total Score</label>
        </div>
    );
};

export default Score;
