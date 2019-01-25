import React from 'react'
import io from "socket.io-client";

const socketUrl = ""   // socketUrl use to connect client side to our server

export default class Layout extends React.Component {
       // In client side connect to io server
    constructor(props) {
        super(props)
        this.state = {
            socket=null 
        }
    }
    // In life cycle of react componentWillMount invoke function
    componentWillMount () {
        this.initSocket()
    }
    // create initSocket function which initialize socket for us 
    initSocket = () => {
       const socket = io(socketUrl)
       socket.on('connected', () => {
           console.log("connected");
       })
       this.setState({socket})
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