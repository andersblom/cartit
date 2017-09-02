import React, { Component } from 'react';

import ReorderIconSVG from './reorder-icon.svg';

export default class _Item extends Component {
    render() {
        return(
            <div className="singleShoppingListItem">
                <div className="singleShoppingListItem-icon"><img src={ReorderIconSVG} alt="Reorder this item" /></div>
                <div className="singleShoppingListItem-itemName">{this.props.itemName}</div>
                <div className="singleShoppingListItem-status">{this.props.statusIsDone? ":)":":("}</div>
            </div>
        )
    }
}