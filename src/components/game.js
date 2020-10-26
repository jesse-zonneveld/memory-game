import React, { Component } from "react";
import "../scss/03-components/_game.scss";
import Card from "./card";
import GameOver from "./gameOver";
import Overlay from "./overlay";

class Game extends Component {
    constructor(props) {
        super(props);
        this.deck = [];
        this.state = {
            seenDeck: [],
            sampleDeck: [],
            gameOver: false,
            overlay: false,
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
        this.initializeDeck();
    }

    componentDidMount() {
        this.shuffleDeck();
    }

    initializeDeck() {
        this.icons.forEach((icon, i) => {
            this.deck.push([i, icon]);
        });
    }

    checkSelectedCard(cardIndex, card) {
        if (this.state.seenDeck.includes(cardIndex)) {
            setTimeout(() => {
                this.gameOver();
                card.classList.remove("red");
                this.setState({
                    overlay: false,
                });
            }, 2000);
            this.setState({
                overlay: true,
            });
            card.classList.add("red");
        } else {
            setTimeout(() => {
                this.addSeenCard(cardIndex);
                card.classList.remove("green");
                this.setState({
                    overlay: false,
                });
            }, 2000);
            this.setState({
                overlay: true,
            });
            card.classList.add("green");
        }
    }

    gameOver() {
        this.setState({
            seenDeck: [],
            gameOver: true,
        });
        this.props.updateBestScore();
    }

    resetGame() {
        this.props.resetScore();
        this.setState({
            sampleDeck: [],
            gameOver: false,
        });
        this.shuffleDeck();
        console.log(this.state.seenDeck);
    }

    addSeenCard(cardIndex) {
        this.setState({
            seenDeck: this.state.seenDeck.concat(cardIndex),
        });
        this.shuffleDeck();
        this.props.incrementScore();
    }

    shuffleDeck() {
        let atLeastOneUnseenCard = false;
        let newSampleDeck = [];
        while (
            !atLeastOneUnseenCard &&
            !(this.state.seenDeck.length >= this.deck.length)
        ) {
            newSampleDeck = [...this.deck]
                .sort(() => Math.random() - 0.5)
                .slice(0, 12);
            const test = newSampleDeck.find(
                (card) => !this.state.seenDeck.includes(card[0])
            );

            atLeastOneUnseenCard = test === undefined ? false : true;
        }
        this.setState({
            sampleDeck: newSampleDeck,
        });
    }

    render() {
        return (
            <div className="game">
                <Overlay active={this.state.overlay} />
                {this.state.gameOver ? (
                    <GameOver resetGame={this.resetGame.bind(this)} />
                ) : (
                    <div className="cards">
                        {this.state.sampleDeck.map((card, i) => (
                            <Card
                                key={i}
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
