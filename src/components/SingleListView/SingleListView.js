import React, { Component } from 'react';

import './SingleListView.css';

export default class SingleListView extends Component {
    render() {
        console.log("list props: ", this.props)
        return(
            <div>
                This is a single list item!1
            </div>
        )
    }
}