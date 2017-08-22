import React, { Component } from 'react';
import _ from 'lodash';

import SingleItem from './_Item/_Item';

import './SingleListView.css';

export default class SingleListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objectToView: {}
        }
    }
    componentDidMount() {
        this.setState({
            objectToView: _.find(this.props.user.lists, { "_id": this.props.location.pathname.replace("/user/list/", "") })
        })
    }
    render() {
        // Ordering by the Order key
        let reorderedListItems = _.orderBy(this.state.objectToView.items, "order", "asc");

        // Mapping ordered lsit items to the _Item component
        let renderedListItems = _.map(reorderedListItems, item => {
            return (<SingleItem {...item} key={item._id} />)
        })
        return(
            <div>
                This is the list: {this.state.objectToView.title}

                <div>
                    {renderedListItems}
                </div>
            </div>
        )
    }
}