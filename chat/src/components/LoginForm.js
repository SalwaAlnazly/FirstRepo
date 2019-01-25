import React from 'react';
import {VERIFY_USER} from '../functions'

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: "",
            error: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {socket} = this.props
        const {nickname} = this.state
        socket.emit(VERIFY_USER, nickname, this.setUser)
    }

    handleChange = (e) => {
        this.setState({nickname: e.target.value})
    }
    render() {
        const { nickname, error } = this.state
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <label htmlFor="nickname">
                        <h2>Got a nickname?</h2>
                        <input
                            ref={(input) => { this.textInput = input }}
                            type="text"
                            id="nickname"
                            value={nickname}
                            onChange={this.handleChange}
                            placeholder={"MyCoolNickname"}
                        />
                        <div className="error">{error ? error : null} </div>
                    </label>
                </form>
            </div>
        )
    }
}