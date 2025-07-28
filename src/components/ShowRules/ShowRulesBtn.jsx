import Button from "../Button/Button";
import DataContext from "../../context/DataContext";
import { useContext } from "react";

const ShowRulesBtn = () => {
    let { setShowRules, showRules } = useContext(DataContext);

    return (
        <Button
            title={ showRules ? "Hide Rules" : "Show Rules" }
            onClick={() => {
                // console.log("showRules");
                
                setShowRules(!showRules);
            }}
        />
    );
};

export default ShowRulesBtn;
