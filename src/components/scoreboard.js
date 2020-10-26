import React, { Component } from "react";
import "../scss/03-components/_scoreboard.scss";

class Scoreboard extends Component {
    render() {
        return (
            <div className="scoreboard banner">
                <div className="current-score-container">
                    <div className="current-score-title">
                        Current Score: {this.props.currentScore}
                    </div>
                </div>
                <div className="best-score-container">
                    <div className="best-score-title">
                        Best Score: {this.props.bestScore}
                    </div>
                </div>
            </div>
        );
    }
}

export default Scoreboard;
