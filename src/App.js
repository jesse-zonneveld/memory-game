import React from "react";

import Game from "./components/game";
import Header from "./components/header";
import Instructions from "./components/instructions";
import Scoreboard from "./components/scoreboard";
import "./scss/app.scss";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScore: 0,
            bestScore: 0,
        };
    }

    resetScore() {
        this.setState({
            currentScore: 0,
        });
    }

    incrementScore() {
        this.setState({
            currentScore: this.state.currentScore + 1,
        });
    }

    updateBestScore() {
        if (this.state.currentScore > this.state.bestScore) {
            this.setState({
                bestScore: this.state.currentScore,
            });
        }
    }

    render() {
        return (
            <div className="app l-container-full-screen">
                <Header title={"Memory Game"} />
                <Instructions />
                <div className="game-container">
                    <Scoreboard
                        currentScore={this.state.currentScore}
                        bestScore={this.state.bestScore}
                    />
                    <Game
                        resetScore={this.resetScore.bind(this)}
                        incrementScore={this.incrementScore.bind(this)}
                        updateBestScore={this.updateBestScore.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default App;
