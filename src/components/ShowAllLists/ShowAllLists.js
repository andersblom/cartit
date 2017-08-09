import React, { Component } from 'react';

export default class ShowAllLists extends Component {
    render() {
        return(
            <div>All lists showing for {this.props.user.username} ({this.props.user.email})</div>
        );
    }
}