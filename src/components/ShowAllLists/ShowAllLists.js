import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _map from 'lodash.map';

import SingleListItem from '../SingleListItem/SingleListItem';

export default class ShowAllLists extends Component {
    render() {
        const listsToBeRendered = _map(this.props.user.lists, list => {
            return (<Link to={`${this.props.match.url}/list/${list._id}`} key={list._id}><SingleListItem listProps={list} /></Link>);
        });
        return(
            <div>{listsToBeRendered}</div>
        );
    }
}