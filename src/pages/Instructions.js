import React from "react";

function Instructions() {
    return (
        <div className="Instructions" style={ {display: 'flex' ,justifyContent: 'center'}}>
            <h1>Instructions</h1>
            Tasks:
            <ul>
                <li>Read and answer on the Consent form located <a href="https://forms.gle/6GAqKtcdyXbdRp9J7">here</a> </li>
                <li>Listen to music piece in the following pages</li>
                <li>After listening to the music answer which emotions did you feel while listening to the music</li>
                <li>Confirm your answer and move to the next music piece</li>
            </ul>
                <button> Next</button>
        </div>
    );
} 

export default Instructions;
