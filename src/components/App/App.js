import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.getPizza();
  }
  getPizza = () => {
    axios.get('/api/pizza')
    .then(response => {
      console.log(response.data)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
      </div>
    );
  }
}

export default App;
