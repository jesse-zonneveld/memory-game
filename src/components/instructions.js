import React from "react";
import "../scss/03-components/_instructions.scss";

const Instructions = () => {
    return (
        <div className="instructions-container">
            <h4 className="instructions-title">
                Try to press as many different symbols that you can.
            </h4>
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
