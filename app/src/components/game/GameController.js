import React, { Component } from 'react';

import Game from 'components/game/Game.js';

const initialState = {

}

export default class GameController extends Component {
    /** Props
    **/
    constructor(props) {
        super(props);
        this.state = initialState;
        this.getRoute = this.getRoute.bind(this);
    }
    /** Methods **/
    render() {
        const route = this.getRoute();
        return (
            <Game />
        );
    }
}

