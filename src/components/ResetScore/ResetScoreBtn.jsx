import styles from "./ResetScoreBtn.module.css";
import DataContext from "../../context/DataContext";
import { useContext } from "react";

const ResetScoreBtn = () => {
    let { setScore } = useContext(DataContext);

    return (
        <button className={`${styles.button}`} onClick={() => setScore(0)}>
            Reset Score
        </button>
    );
};

export default ResetScoreBtn;
