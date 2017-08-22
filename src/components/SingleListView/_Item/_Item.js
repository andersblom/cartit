import React, { Component } from 'react';
import _ from 'lodash';

export default class _Item extends Component {
    render() {
        return(
            <div>
                [ ] {this.props.itemName}
            </div>
        )
    }
}