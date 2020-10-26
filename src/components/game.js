import React, { Component } from "react";
import "../scss/03-components/_game.scss";
import Card from "./card";
import GameOver from "./gameOver";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: [],
            seenDeck: [],
            sampleDeck: [],
            gameOver: false,
        };
        this.icons = [
            "far fa-address-card",
            "fas fa-air-freshener",
            "fas fa-anchor",
            "fas fa-arrows-alt",
            "fas fa-atom",
            "fas fa-baseball-ball",
            "fas fa-beer",
            "fas fa-bomb",
            "fas fa-briefcase",
            "fas fa-camera-retro",
            "fas fa-car",
            "fas fa-carrot",
            "fas fa-chair",
            "fas fa-cat",
            "fas fa-cash-register",
            "fas fa-chess-knight",
            "fas fa-bowling-ball",
            "fas fa-bread-slice",
            "fas fa-building",
            "fas fa-calculator",
            "fas fa-bus-alt",
            "fas fa-dumpster",
            "fas fa-door-closed",
            "fas fa-dice-five",
            "fas fa-desktop",
            "fas fa-concierge-bell",
            "fas fa-cookie-bite",
            "fas fa-cog",
            "fas fa-coffee",
            "fas fa-cloud-showers-heavy",
            "fas fa-city",
            "fas fa-clock",
            "fas fa-child",
        ];
    }

    componentDidMount() {
        console.log("mount");
        const newDeck = [];
        this.icons.forEach((icon, i) => {
            newDeck.push([i, icon]);
        });

        this.setState({
            deck: newDeck,
            sampleDeck: newDeck.slice(0, 12),
        });
    }

    checkSelectedCard(cardIndex) {
        if (this.state.seenDeck.includes(cardIndex)) {
            this.gameOver();
        } else {
            this.addSeenCard(cardIndex);
        }
    }

    gameOver() {
        this.setState({
            gameOver: true,
        });
        this.props.updateBestScore();
    }

    resetGame() {
        this.props.resetScore();
        this.setState({
            seenDeck: [],
            sampleDeck: this.state.deck.slice(0, 12),
            gameOver: false,
        });
    }

    addSeenCard(cardIndex) {
        this.setState({
            seenDeck: this.state.seenDeck.concat(cardIndex),
        });
        this.shuffleDeck();
        this.props.incrementScore();
    }

    shuffleDeck() {
        console.log("inside shuffle");
        let atLeastOneUnseenCard = false;
        let newSampleDeck = [];
        while (
            !atLeastOneUnseenCard &&
            !(this.state.seenDeck.length >= this.state.deck.length)
        ) {
            newSampleDeck = [...this.state.deck]
                .sort(() => Math.random() - 0.5)
                .slice(0, 12);
            const test = newSampleDeck.find(
                (card) => !this.state.seenDeck.includes(card[0])
            );

            atLeastOneUnseenCard = test === undefined ? false : true;
            console.log(test);
            console.log(atLeastOneUnseenCard);
        }
        this.setState({
            sampleDeck: newSampleDeck,
        });
    }

    render() {
        console.log(this.state.deck);
        console.log(this.state.sampleDeck);
        console.log(this.state.seenDeck);
        return (
            <div className="game">
                <button onClick={() => this.addSeenCard(this.counter)}>
                    add
                </button>
                <button onClick={this.gameOver.bind(this)}>gameover</button>
                {this.state.gameOver ? (
                    <GameOver resetGame={this.resetGame.bind(this)} />
                ) : (
                    <div className="cards">
                        {this.state.sampleDeck.map((card) => (
                            <Card
                                index={card[0]}
                                icon={card[1]}
                                checkSelectedCard={this.checkSelectedCard.bind(
                                    this
                                )}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default Game;
