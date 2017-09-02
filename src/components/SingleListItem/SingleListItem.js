import React, { Component } from 'react';

import './SingleListItem.css';

export default class SingleListItem extends Component {
    render() {
        return(
            <div className="singleList">
                {this.props.listProps.title} 
                {this.props.listProps.items.length}
                
                created at {this.props.listProps.listCreatedAt}
            </div>
        )
    }
}