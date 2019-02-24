import React from 'react'
import * as Socket from './socket'
import './style.css'

export default class Messages extends React.Component {
    state = {
        user: {
            id: window.location.pathname
        },
        admin: {
            messages: []
        }
    }

    componentDidMount = () => {
        Socket.fetchUserUrl(window.location.pathname)
        Socket.onLoadAdminMessages(this.loadAdminMessages)
       
    }

    loadAdminMessages = messages => {
        console.table(messages)
        if (messages && Array.isArray(messages)) {
            this.setState({
                admin: {    
                    messages
                }
            })
        }
    }

    handleSendMessage = (e) => {
        e.preventDefault()
        const { target: { message: { value: message } } } = e
        const userId = this.state.user.id.split('/')
        const userID = userId[1]
        const newMessage = { id: "Durgham", author: userID, body: message, createdAt: Date.now(), who: 'mish' }
        console.log("newMessage", newMessage);

        Socket.onSendMessage(newMessage)
        newMessage.who = 'me'
        const updateMessages = [...this.state.admin.messages, newMessage]

        this.setState({
            admin: { messages: updateMessages }
        })
        this.refs.msg.value = ""
    }

    render() {
        const { state: { admin } } = this
        const adminMessages = admin.messages || []

        return (
            <div className="chat-container">
                <div className="chat">
                    <div className="chat-body">
                        <div>
                            {adminMessages.map(message =>
                                message.author == "Durgham" ?
                                    <span>
                                        <div className="message-data align-right">
                                            <span className="message-time" >{message.createdAt}</span> 
                                            <span className="message-name">{message.author}</span> 

                                        </div>
                                        <div className="message other-message float-right">
                                            {message.body}
                                        </div>
                                    </span> : <span>
                                        <div className="message-data">

                                            <span className="message-name">{message.author}</span> 
                                            <span className="message-time" >{message.createdAt}</span> 
                                    </div>
                                        <div className="message my-message">
                                            {message.body}
                                        </div>
                                    </span>


                            )}
                        </div>

                    </div>


                    <div className="chat-message left">
                        <form onSubmit={this.handleSendMessage} className="message-input">
                            <input name='message' type="text" className="input-filed" ref="msg" />
                            <button type="submit" className="send">Send</button>
                        </form>

                    </div>

                </div>

            </div>
        )
    }
}
