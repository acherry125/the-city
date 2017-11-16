import React, { Component } from 'react';

const initialState = {

}

export default class Game extends Component {
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
            <div className="Game-View standard-main">
                Game View.
            </div>
        );
    }
}

