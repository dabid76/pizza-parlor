import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// import Home from '../Home/Home.js';
// import PizzaList from '../PizzaList/PizzaList';
// import PizzaItem from '../PizzaItem/PizzaItem';
// import OrderForm from '../OrderForm/OrderForm';
// import Checkout from '../Checkout/Checkout';
// import CheckoutTable from '../CheckoutTable/CheckoutTable';
// import UserInfo from '../UserInfo/UserInfo';

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
