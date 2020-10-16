import React, { Component } from 'react';
import Button from './components/Button';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  };
  
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App-header">
        <div>
          <div className="App">
            <h3>Count</h3>
            <h1>{this.state.count}</h1>
          </div>
          <div>
            <Button title="-" task={this.decrementCount} />
            <Button title="+" task={this.incrementCount} />
          </div>
        </div>
      </div>
    );
  };
};