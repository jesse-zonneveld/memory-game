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
                <div className="l-container-1080">
                    <Header title={"Memory Game"} />
                    <Instructions />
                </div>
                <div className="game-container">
                    <div className="l-container-full-screen bg-green">
                        <div className="l-container-1080">
                            <Scoreboard
                                currentScore={this.state.currentScore}
                                bestScore={this.state.bestScore}
                            />
                        </div>
                    </div>
                    <div className="l-container-full-screen">
                        <div className="l-container-1080">
                            <Game
                                resetScore={this.resetScore.bind(this)}
                                incrementScore={this.incrementScore.bind(this)}
                                updateBestScore={this.updateBestScore.bind(
                                    this
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
