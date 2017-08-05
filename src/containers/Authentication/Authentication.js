import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Authentication extends Component {
    constructor() {
        super();
        this.state = {
            IsUserLoggedIn: false,
            user: {} 
        }
    }
    
    render() {
        if (this.state.IsUserLoggedIn) {
            return(
                <div>Here are your lists:</div>
            );
        } else {
            return(
                <div>log in here:</div>
            );
        }
    }
}