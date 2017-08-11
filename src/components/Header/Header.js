import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
            <div>
                Nav: <Link to={`${this.props.match.url}`}>Lists</Link> - <Link to={`${this.props.match.url}/settings`}>Settings</Link> - <Link to={`/`} onClick={this.props.logUserOut}>Log out</Link>
            </div>
        )
    }
}