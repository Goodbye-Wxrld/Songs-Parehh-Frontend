import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Start from "./pages/Start.js";
import Instructions from "./pages/Instructions.js";
import Pagenotfound from "./pages/PageNotFound.js";
import MainInterface from "./pages/maininterface.js";
import ConsentForm from "./pages/ConsentForm.js";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Start />} />
                <Route path="/ConsentForm" exact element={<ConsentForm />} />
                <Route path="/Instructions" exact element={<Instructions />} />
                <Route path="/MainInterface" exact element={<MainInterface />} />
                <Route path="*" exact element={<Pagenotfound />} />
            </Routes>
        </Router>
    );
}

export default App;
