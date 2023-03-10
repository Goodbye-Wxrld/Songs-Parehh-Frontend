import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import { useState } from 'react';

import wav1 from "../audioclips/1.wav";
function MainInterface() {

    const [isAngerChecked, setIsAngerChecked] = useState(false);
    const handleAngerOnChange = (event) => {
        setIsAngerChecked(!isAngerChecked);
    }

    const [isDisgustChecked, setIsDisgustChecked] = useState(false);
    const handleDisgustOnChange = (event) => {
        setIsDisgustChecked(!isDisgustChecked);
    }

    const [isFearChecked, setIsFearChecked] = useState(false);
    const handleFearOnChange = (event) => {
        setIsFearChecked(!isFearChecked);
    }

    const [isHappinessChecked, setIsHappinessChecked] = useState(false);
    const handleHappinessOnChange = (event) => {
        setIsHappinessChecked(!isHappinessChecked);
    }

    const [isSadnessChecked, setIsSadnessChecked] = useState(false);
    const handleSadnessOnChange = (event) => {
        setIsSadnessChecked(!isSadnessChecked);
    }

    const [isSurpriseChecked, setIsSurpriseChecked] = useState(false);
    const handleSurpriseOnChange = (event) => {
        setIsSurpriseChecked(!isSurpriseChecked);
    }


    return (
        <div className="MainInterface"  >
            <ReactAudioPlayer
                src={wav1}
                autoPlay = {false}
                controls
                volume={0.1}
            />
            {/* emotions are anger disgust fear happiness sadness surprise*/}
            <div className="emotions">
                <label class="toggle">
                    <input
                        type="checkbox"
                        id="Anger"
                        name="Anger"
                        value="Anger"
                        checked={isAngerChecked}
                        onChange={handleAngerOnChange}
                    />
                    <span class="slider"></span>
                    <span class="labels" data-on="Present" data-off="None"></span>
                </label>
                Anger
                <label class="toggle">
                    <input
                        type="checkbox"
                        id="Disgust"
                        name="Disgust"
                        value="Disgust"
                        checked={isDisgustChecked}
                        onChange={handleDisgustOnChange}
                    />
                    <span class="slider"></span>
                    <span class="labels" data-on="Present" data-off="None"></span>
                </label>
                Disgust
                <label class="toggle">
                    <input
                        type="checkbox"
                        id="Fear"
                        name="Fear"
                        value="Fear"
                        checked={isFearChecked}
                        onChange={handleFearOnChange}
                    />
                    <span class="slider"></span>
                    <span class="labels" data-on="Present" data-off="None"></span>
                </label>
                Fear
                <label class="toggle">
                    <input
                        type="checkbox"
                        id="Happiness"
                        name="Happiness"
                        value="Happiness"
                        checked={isHappinessChecked}
                        onChange={handleHappinessOnChange}
                    />
                    <span class="slider"></span>
                    <span class="labels" data-on="Present" data-off="None"></span>
                </label>
                Happiness
                <label class="toggle">
                    <input
                        type="checkbox"
                        id="Sadness"
                        name="Sadness"
                        value="Sadness"
                        checked={isSadnessChecked}
                        onChange={handleSadnessOnChange}
                    />
                    <span class="slider"></span>
                    <span class="labels" data-on="Present" data-off="None"></span>
                </label>
                Sadness
                <label class="toggle">
                    <input
                        type="checkbox"
                        id="Surprise"
                        name="Surprise"
                        value="Surprise"
                        checked={isSurpriseChecked}
                        onChange={handleSurpriseOnChange}
                    />
                    <span class="slider"></span>
                    <span class="labels" data-on="Present" data-off="None"></span>
                </label>
                Surprise
            </div>
        </div>
    );
}

export default MainInterface;