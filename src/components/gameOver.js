import React from "react";

import "../scss/03-components/_game-over.scss";
import Button from "./button";

const GameOver = (props) => {
    return (
        <div className="game-over-container">
            <h2 className="game-over-title">Game Over</h2>
            <Button onClickEvent={props.resetGame} label={"Play Again"} />
        </div>
    );
};

export default GameOver;
