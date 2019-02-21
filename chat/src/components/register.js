import React, { Component } from 'react';
import * as Socket from './socket';

export default class Register extends Component {
    state = {
        email: '',
        username: "",
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
        fetch('/users/register', {
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
                console.log("data", data);
                
                Socket.onOpenConnection(data)
                window.location = "/login"
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
                <h1>Sign up</h1>
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
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
