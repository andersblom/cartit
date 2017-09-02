import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends Component {
    render() {
        return(
            <header>
                <div className="headerContents">
                    <div className="backArrow">-</div>
                    <div className="appTitle">CartIt</div>
                    <nav><Link to={`${this.props.match.url}`}>Lists</Link> - <Link to={`${this.props.match.url}/settings`}>Settings</Link> - <Link to={`/user`} onClick={this.props.logUserOut}>Log out</Link></nav>
                </div>
                <div className="navBottom"></div>
            </header>
        )
    }
}