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
    render() {
        if (this.state.IsUserLoggedIn) {
            return(<div>{this.props.children}</div>)
        } else {
            return(<Redirect to={{ pathname: '/' }} />);
        }
    }
}