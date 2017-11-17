import React, { Component } from 'react';

const initialState = {

}

export default class Game extends Component {
    /** Props
    **/
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    renderConversationBlock(block) {
        if (block.type === 'ai') {
            return (
                <div className="ai-text" key={block.id}>
                    <h1 className="msg animate">{block.text}</h1>
                </div>
            )
        } else if (block.type === 'user') {
            return (
                <div className="user-text" key={block.id}>
                    <h1 className="msg animate">{block.text}</h1>
                </div>
            ) 
        }
    }
    /** Methods **/
    render() {
        var conversation = this.props.conversation.map(this.renderConversationBlock);
        return (
            <main className="Game-View standard-main">
                <div className="conversation-box">
                    {conversation}
                </div>
            </main>
        );
    }
}

