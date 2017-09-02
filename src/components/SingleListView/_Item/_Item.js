import React, { Component } from 'react';

import ReorderIconSVG from './reorder-icon.svg';

export default class _Item extends Component {
    constructor() {
        super();
        
        this.state = {
            itemIsBeingEdited: false,
            inputValue: "",
        }

        this.editItem = this.editItem.bind(this);
        this.editItemIsDone = this.editItemIsDone.bind(this);
    }

    editItem() {
        this.setState({itemIsBeingEdited: true});
        this.refs.itemNameEditingInput.focus()
    }

    editItemIsDone() {
        this.setState({itemIsBeingEdited: false});
    }

    handleItemEditingInput(e) {
        this.setState({inputValue: e.target.value});
    }

    componentDidMount() {
        this.setState({inputValue: this.props.itemName})
    }

    render() {
        return(
            <div className="singleShoppingListItem">
                <div className="singleShoppingListItem-icon"><img src={ReorderIconSVG} alt="Reorder this item" /></div>
                <div className={"singleShoppingListItem-itemName " + (this.state.itemIsBeingEdited ? "editing" : "not-editing")}>
                    <input value={this.state.inputValue} onBlur={this.editItemIsDone} ref="itemNameEditingInput" onChange={this.handleItemEditingInput} />
                    <label onClick={this.editItem}>{this.state.inputValue}</label>
                </div>
                <div className="singleShoppingListItem-status">{this.props.statusIsDone? ":)":":("}</div>
            </div>
        )
    }
}