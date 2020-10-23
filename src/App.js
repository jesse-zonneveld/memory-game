import React from "react";

import Game from "./components/game";
import Header from "./components/header";
import Instructions from "./components/instructions";
import Scoreboard from "./components/scoreboard";
import "./scss/app.scss";

class App extends React.Component {
    render() {
        return (
            <div className="app l-container-full-screen">
                <Header title={"Memory Game"} />
                <Instructions />
                <div className="game-container">
                    <Scoreboard />
                    <Game />
                </div>
            </div>
        );
    }
}

export default App;
