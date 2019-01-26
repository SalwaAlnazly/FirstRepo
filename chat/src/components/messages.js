import React from 'react'
import Message from './message'

export default class Messages extends React.Component {
    render() {
        const messages = this.props.messages.map((message, i) => {
            return (
                <Message
                    key={i}
                    nickname={message.nickname}
                    message={message.message}
                    fromMe={message.fromMe}
                />
            )
        })
        return (
            <div className="message" id="messageList">
                {messages}
            </div>
        )

    }
}