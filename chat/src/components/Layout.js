import React from 'react';
import { USER_CONNECTED, LOGOUT } from "../Events";
import LoginForm from './LoginForm'

import openSocket from 'socket.io-client';

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
       const socket  = openSocket('http://localhost:8080/');
        // const { socket } = io(socketUrl)
        // console.log('soc', this.state.socket);
        
        socket.on('connected', () => {
            console.log("connected");
            // this.setState({ this.state.socket })
        })
        this.setState({ socket })
        console.log('this.state.socket', this.state.socket);
    }

    /**
     * Sets the user property in state
     */
    setUser = (user) => {
        console.log('soc', user);
        
        // const { socket } = this.state
        this.state.socket.emit('USER_CONNECTED', user)
        console.log('user', user);
        
        this.setState({ user })
    }


    /**
     * Sets the user property in state to null
     */
    logout = () => {
        const socket = this.state
        socket.emit(LOGOUT)
        this.setState({ user: null })
    }
    render() {
        // const {socket} = this.state
        return (
            <div className="container">
                <LoginForm socket={this.state.socket} setUser={this.setUser} />
            </div>
        )
    }
}