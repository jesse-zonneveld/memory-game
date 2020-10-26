import React, { Component } from "react";
import "../scss/03-components/_scoreboard.scss";

class Scoreboard extends Component {
    render() {
        return (
            <div className="scoreboard">
                <div className="current-score-container">
                    <h3 className="current-score-title">
                        Current Score: {this.props.currentScore}
                    </h3>
                </div>
                <div className="best-score-container">
                    <h3 className="best-score-title">
                        Best Scroe: {this.props.bestScore}
                    </h3>
                </div>
            </div>
        );
    }
}

export default Scoreboard;
