import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SingleListItem from '../SingleListItem/SingleListItem';

import './ShowAllLists.css';

export default class ShowAllLists extends Component {
    render() {
        const listsToBeRendered = _.map(this.props.user.lists, list => {
            return (<Link to={`${this.props.match.url}/list/${list._id}`} key={list._id}><SingleListItem listProps={list} /></Link>);
        });
        return(
            <div className="showAllLists">{listsToBeRendered}</div>
        );
    }
}