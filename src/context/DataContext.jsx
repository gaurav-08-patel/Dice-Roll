import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    let [userValue, setUserValue] = useState(undefined);
    let [error, setError] = useState(false);
    let [score, setScore] = useState(0);
    let [diceNum, setDiceNum] = useState(0);
    let [showRules, setShowRules] = useState(false);

    return (
        <DataContext.Provider
            value={{
                userValue,
                setUserValue,
                error,
                setError,
                score,
                setScore,
                diceNum,
                setDiceNum,
                showRules,
                setShowRules,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
