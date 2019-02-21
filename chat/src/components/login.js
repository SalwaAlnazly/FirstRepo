import React, { Component } from 'react';
import * as Socket from './socket';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        userData: {}
    }

    handleInputChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        fetch('/users/login', {
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
                window.location = "/messages"
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
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                />
         
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
