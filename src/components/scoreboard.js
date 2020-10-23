import React, { useState } from "react";
import "../scss/03-components/_scoreboard.scss";

const Scoreboard = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const incrementCurrentScore = () => {
        setCurrentScore(currentScore + 1);
    };

    const updateBestScore = () => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
    };

    return (
        <div className="scoreboard">
            <div className="current-score-container">
                <h3 className="current-score-title">
                    Current Scroe: {currentScore}
                </h3>
            </div>
            <div className="best-score-container">
                <h3 className="best-score-title">Best Scroe: {bestScore}</h3>
            </div>
        </div>
    );
};

export default Scoreboard;
