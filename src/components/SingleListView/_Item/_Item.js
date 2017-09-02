import React, { Component } from 'react';
import _ from 'lodash';

export default class _Item extends Component {
    render() {
        return(
            <div className="singleShoppingListItem">
                <div className="singleShoppingListItem-icon">(m)</div>
                <div className="singleShoppingListItem-itemName">{this.props.itemName}</div>
                <div className="singleShoppingListItem-status">{this.props.statusIsDone? ":)":":("}</div>
            </div>
        )
    }
}