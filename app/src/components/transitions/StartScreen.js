import React, { Component } from 'react';

import { Link } from "react-router-dom";

import DotDotDot from 'components/animations/DotDotDot.js';

/** Initial Screen, WIP on where it fits into the flow once login and reg are implemented. **/
export default class StartScreen extends Component {
    /** Props 
     * this.props.user
     * **/
    constructor(props) {
        super(props);
        this.state = {name: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetName = this.resetName.bind(this);        
    }
    handleChange(event) {
        this.setState({name: event.target.value});
    }

    /** Methods **/
    handleSubmit(event) {
        this.props.handleNameChange(event.target.name.value);
        event.preventDefault();
    }
    resetName() {
        this.props.resetName();
    }
    render() {
        return (
            <div className="Start-Screen">
                <div className="start-text">
                    <h1>The City</h1>
                    {this.props.user.name ? (
                        <div className="conversationBox">
                            <div className="ai-text">
                                <h1 className="msg">Hello {this.props.user.name}<DotDotDot/></h1>
                            </div>
                            <div className="responses">
                                <Link to="/play" className="msg">Hello.</Link>
                                <button onClick={this.resetName} className="msg">That's not my name.</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <h2>Who are you?</h2>
                                <h2><DotDotDot/></h2>
                                <h2><input autoComplete="off"  value={this.state.name} placeholder="" type="text" name="name" id="name" onChange={this.handleChange} /></h2>
                            </form>
                        </div>
                    )} 
                </div>
            </div>
        );
    }
}

