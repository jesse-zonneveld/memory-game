import React from "react";
import "../scss/03-components/_instructions.scss";

const Instructions = () => {
    return (
        <div className="instructions-container">
            <h2 className="instructions-title">Instructions:</h2>
            <ol className="instructions-list">
                <li className="instruction">
                    Press on any card to shuffle deck.
                </li>
                <li className="instruction">
                    Then press on a different card to repeat the process.
                </li>
                <li className="instruction">
                    You lose if you press on a card you've previously press on.
                </li>
            </ol>
        </div>
    );
};

export default Instructions;
