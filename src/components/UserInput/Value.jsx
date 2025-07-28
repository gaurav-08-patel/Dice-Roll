import styles from "./Value.module.css";
import DataContext from "../../context/DataContext.jsx";
import { useContext } from "react";

const Value = ({ value }) => {
    let { userValue, setUserValue, setError } = useContext(DataContext);

    return (
        <button
            className={`${styles.value} ${
                userValue === value ? styles.selected : ""
            }`}
            onClick={() => {
                setUserValue(value);
                setError(false);
            }}
        >
            {value}
        </button>
    );
};

export default Value;
