import React, { Component } from 'react';

import { Link } from "react-router-dom";

/*** Display the Menu ***/
export default class Menu extends Component {
    /** Props
    * WIP
    **/
    /** Methods **/
    render() {
        return (
            <div className="Menu standard-main">
                <Link to="/play">Play</Link>
            </div>
        );
    }
}

