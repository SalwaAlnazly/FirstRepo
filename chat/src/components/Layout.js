import React from 'react';
import io from "socket.io-client";
import {USER_CONNECTED} from "../actions/index";

const socketUrl = ""   // socketUrl use to connect client side to our server

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            socket: null,
            user: null
        }
    }
    componentWillMount() {
        this.initSocket()
    }
    /*** Connect to and initialize the socket */
    initSocket = () => {
        const socket = io(socketUrl)
        socket.on('connected', () => {
            console.log("connected");
        })
        this.setState({ socket })
    }

    /**
     * Sets the user property in state
     */
    SetUser = (user) => {
        const socket = this.state
        socket.emit(USER_CONNECTED)
        this.setState({ user })
    }
    render() {
        const { title } = this.props
        return (
            <div className="container">
                {title}
            </div>
        )
    }
}