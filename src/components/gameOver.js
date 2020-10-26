import React from "react";

import "../scss/03-components/_game-over.scss";

const GameOver = (props) => {
    return (
        <div className="game-over-container">
            <h2 className="game-over-title">Game Over</h2>
            <button onClick={props.resetGame}>Play Again</button>
        </div>
    );
};

export default GameOver;
