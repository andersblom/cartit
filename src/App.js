import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {

    
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}
