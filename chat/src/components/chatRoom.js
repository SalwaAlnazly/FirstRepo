import React from 'react'

export default class ChatRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }
    sendHanler = () => {
        
    }
    render() {
        return (
            <div>
                <Messages messages={this.state.messages}/>
                <SendMessageInput  onSend={this.sendHandler}/>
            </div>
        )
    }
}