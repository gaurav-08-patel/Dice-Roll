import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GamePage from "./components/GamePage";
import { DataProvider } from "./context/DataContext";

function App() {
    return (
        <>
            <DataProvider>
                <Routes>
                    <Route index path="/" element={<LandingPage />} />
                    <Route path="/play" element={<GamePage />} />
                </Routes>
            </DataProvider>
        </>
    );
}

export default App;
