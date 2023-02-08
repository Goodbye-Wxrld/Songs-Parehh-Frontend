import React from "react";
import { useNavigate } from "react-router-dom";

function Instructions() {
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate("/MainInterface");
    }
    return (
        <div className="Instructions">
            <div className="InstructionsWord">
                <h1>Instructions</h1>
            </div>
            <div className="InstructionsText">
                Tasks:
                <ul>
                    <li>Read and answer on the Consent form located <a href="https://forms.gle/6GAqKtcdyXbdRp9J7">here</a> </li>
                    <li>Listen to music piece in the following pages</li>
                    <li>After listening to the music answer which emotions did you feel while listening to the music</li>
                    <li>Confirm your answer and move to the next music piece</li>
                </ul>
            </div>
            
            <button class="NextPageButton" onClick={handleNextPage}>Next</button>

        </div>
    );
} 

export default Instructions;
