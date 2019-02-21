import React, { Component } from 'react';
import * as Socket from './socket';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: "",
            password: '',
            passwordConf: "",
            userData: {}
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        fetch('/users/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(this.state);
                
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
            Socket.onOpenConnection(data)
            }
            )
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="passwordConf"
                    placeholder="Enter passwordConf"
                    value={this.state.passwordConf}
                    onChange={this.handleInputChange}
                    required
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
