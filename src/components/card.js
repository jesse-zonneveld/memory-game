import React, { Component } from "react";
import "../scss/03-components/_card.scss";

class Card extends Component {
    addToGameSeenDeck() {
        this.props.checkSelectedCard(this.props.index);
    }

    render() {
        return (
            <div className="card" onClick={this.addToGameSeenDeck.bind(this)}>
                <div className="card-icon">
                    <i className={this.props.icon}></i>
                </div>
            </div>
        );
    }
}

export default Card;
