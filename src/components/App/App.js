import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList';
import Home from '../Home/Home.js';
import OrderForm from '../OrderForm/OrderForm';
// import Checkout from '../Checkout/Checkout';
// import CheckoutTable from '../CheckoutTable/CheckoutTable';
// import UserInfo from '../UserInfo/UserInfo';

class App extends Component {

  componentDidMount = () => {
    this.getPizza();
  }
  getPizza = () => {
    axios.get('/api/pizza')
    .then((response) => {
      this.props.dispatch({type: 'LIST_PIZZAS', payload: response.data})
    }).catch((error) => {
      console.log('this is the error:', error)
    })
  }
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
      <Route path="/" exact component={Home} />
      <Route path="/order" component={OrderForm} />
      </div>
      </Router>
    );
  }
}

export default connect()(App);
