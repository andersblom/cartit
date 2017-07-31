import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    axios.get("http://localhost:3001/api/user/597b5e5f2109eb33ae432eb9")
    .then(res => {
      this.setState({user: res.data})
    })
    .catch(err => {
      console.error(err);
    })
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
