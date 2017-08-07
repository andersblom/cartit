import React, { Component } from 'react';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            usernameInput: "",
            passwordInput: ""
        }
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
    }

    handleUsernameInput(e) {
        this.setState({ usernameInput: e.target.value });
    }

    handlePasswordInput(e) {
        this.setState({ passwordInput: e.target.value });
    }

    render() {
        return(
            <div>
                <form method="post" action="localhost:3001/api/user/signin">
                    <input type="text" value={this.state.usernameInput} onChange={this.handleUsernameInput} placeholder="username" />
                    <input type="password" value={this.state.passwordInput} onChange={this.handlePasswordInput} />
                </form>
            </div>
        );
    }
}