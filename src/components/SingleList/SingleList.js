import React, { Component } from 'react';

import './SingleList.css';

export default class SingleList extends Component {
    render() {
        console.log("list props: ", this.props.listProps)
        return(
            <div className="singleList">
                {this.props.listProps.title} ({this.props.listProps.items.length}) - created at {this.props.listProps.listCreatedAt}
            </div>
        )
    }
}