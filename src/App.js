import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Start from "./pages/Start.js";
import Instructions from "./pages/Instructions.js";
import Pagenotfound from "./pages/PageNotFound.js";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Start />} />
                <Route path="/Instructions" exact element={<Instructions />} />
                <Route path="*" exact element={<Pagenotfound />} />
            </Routes>
        </Router>

    
    );
}

export default App;
