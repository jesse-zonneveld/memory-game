import React from "react";

import "../scss/03-components/_game-over.scss";
import Button from "./button";

const GameEnd = (props) => {
    return (
        <div className="game-over-container">
            <h2 className="game-over-title">{props.title}</h2>
            <Button onClickEvent={props.resetGame} label={"Play Again"} />
        </div>
    );
};

export default GameEnd;
