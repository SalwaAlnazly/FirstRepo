import React from 'react'

export default class LoginFormWithNickname extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            nickname : "",  // set the initial state of the application
            submitted: false
        }
    }
    nicknameChangeHandler = (e) => {
        this.setState({nickname: e.target.value})
    }
    nicknameSubmitHandler = (e) => {
          e.preventDefault()
          this.setState({submitted: true, nickname: this.state.nickname})
    }
    render() {
        return (
            <form className="nickname-container" onSubmit={this.nicknameSubmitHandler}>
                <h1>Enter you nickname</h1>
                <div>
                    <input
                        type="text"
                        onChange={this.nicknameChangeHandler}
                        required
                    />
                    <input
                        type="submit"
                        value="submit"
                    />
                </div>
            </form>
        )
    }
}

