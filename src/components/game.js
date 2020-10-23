import React, { Component } from "react";
import "../scss/03-components/_game.scss";
import Card from "./card";

class Game extends Component {
    constructor(props) {
        super(props);
        this.counter = 0;
        this.state = {
            deck: [],
            seenDeck: [],
            sampleDeck: [],
        };
    }

    componentDidMount() {
        console.log("mount");
        const newDeck = [];
        for (let i = 0; i < 30; i++) {
            newDeck.push(i);
        }
        this.setState({
            deck: newDeck,
            sampleDeck: newDeck.slice(0, 10),
        });
    }

    addSeenCard(card) {
        this.setState({
            seenDeck: this.state.seenDeck.concat(card),
        });
        this.shuffleDeck();
        this.counter++;
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
                .slice(0, 10);
            const test = newSampleDeck.find(
                (card) => !this.state.seenDeck.includes(card)
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

                <div className="cards">
                    {this.state.sampleDeck.map((card) => (
                        <Card symbol={card} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Game;
