import React from 'react'
import io from "socket.io-client";

const socketUrl = ""
export default class Layout extends React.Component {
       // In client side connect to io server
    constructor(props) {
        super(props)
        this.state = {
            socket=null
        }
    }
    render() {
        const {title} = this.props
        return (
            <div className="container">
            {title}
            </div>
        )
    }
}