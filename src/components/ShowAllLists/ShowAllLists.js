import React, { Component } from 'react';
import _map from 'lodash.map';

import SingleList from '../SingleList/SingleList';

export default class ShowAllLists extends Component {
    render() {
        const listsToBeRendered = _map(this.props.user.lists, list => {
            return (<SingleList key={list._id} listProps={list} />);
        });
        return(
            <div>{listsToBeRendered}</div>
        );
    }
}