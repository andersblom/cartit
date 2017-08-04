import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class IsUserLoggedIn extends Component {
    constructor() {
        super();
        this.state = {
            IsUserLoggedIn: false,
            user: {}
        }
    }

    whatShouldIRedirecTo() {
        if (this.state.IsUserLoggedIn) {
            return(<div>{this.props.children}</div>)
        } else if (!this.state.IsUserLoggedIn) {
            return(<div>ur not even logged in</div>)
        }
    }
    
    render() {
        return (this.whatShouldIRedirecTo());
    }
}