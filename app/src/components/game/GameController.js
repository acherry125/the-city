import React, { Component } from 'react';

import Game from 'components/game/Game.js';

const initialState = {
    index: 0
}

export default class GameController extends Component {
    /** Props
    **/
    constructor(props) {
        super(props);
        this.state = initialState;
        this.makeAiMsg = this.makeAiMsg.bind(this);
        this.makeUserMsg = this.makeUserMsg.bind(this);
    }
    /** Methods **/
    makeAiMsg(speech) {
        const index = this.state.index++;
        return {id: index, type: 'ai', text: speech};
    }
    makeUserMsg(speech) {
        const index = this.state.index++;
        return {id: index, type: 'user', text: speech};
    }
    render() {
        const makeAiMsg = this.makeAiMsg,
            makeUserMsg = this.makeUserMsg,
            exText = [
                makeAiMsg(`Hello Government Employee two three dash... ah, I see now. Apologies. Hello Citizen ${this.props.user.name}.`),
                makeUserMsg("Well sorry, but it's true.")
            ]
        return (
            <Game conversation={exText}/>
        );
    }
}

