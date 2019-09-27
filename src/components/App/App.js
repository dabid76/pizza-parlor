import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../Home/Home.js';
import { connect } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList';
// import PizzaItem from '../PizzaItem/PizzaItem';
import OrderForm from '../OrderForm/OrderForm';
import Checkout from '../Checkout/Checkout';
// import CheckoutTable from '../CheckoutTable/CheckoutTable';
// import UserInfo from '../UserInfo/UserInfo';
import Admin from '../Admin/Admin'

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
        <ul class="main-nav">
            <li class="main-nav-li">
              <Link to="/">Home</Link>
            </li>
            <li class="main-nav-li">
              <Link to="/customer-info">Order Form</Link>
            </li>
            <li class="main-nav-li">
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        <Route path="/" exact component={PizzaList}/>
        <Route path="/customer-info" component={OrderForm}/>
        <Route path="/checkout" component={Checkout}/>
      {/* <PizzaList/> */}
      </div>
      </Router>
    );
  }
}

export default connect()(App);
