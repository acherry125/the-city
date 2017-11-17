import React, { Component } from 'react';

import { Route, BrowserRouter, Switch } from "react-router-dom";


import StartScreen from 'components/transitions/StartScreen.js';
import GameController from 'components/game/GameController.js';
import MenuController from 'components/menu/MenuController.js';

import { _extend } from 'utilities/extend.js'

class User {
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }
    updateUserData(newData) {
        _extend(this.data, newData);
    }
    getName() {
        return this.name;
    }
}

/*** Top-Level Application ***/
class App extends Component {
    constructor(props) {
        super(props);
        const cachedName = localStorage.getItem("name") || "";
        this.state = { 
            user : new User(cachedName), 
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.resetName = this.resetName.bind(this);        
    }
    handleNameChange(name) {
        this.setState({user: {name: name}});
        localStorage.setItem('name', name);
    }
    resetName() {
        this.setState({user: {name: null}})
        localStorage.removeItem('name');
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/the-city/menu" render={props => <MenuController user={this.state.user} {...props} />} />
                        <Route exact path="/the-city/" render={props => <StartScreen user={this.state.user} handleNameChange={this.handleNameChange} resetName={this.resetName} {...props} />} />
                        <Route path="/the-city/play" render={props => <GameController user={this.state.user} {...props} />} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
