import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList';
import OrderForm from '../OrderForm/OrderForm';
// import Checkout from '../Checkout/Checkout';
// import PizzaItem from '../PizzaItem/PizzaItem';
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
          Order Total: ${this.props.reduxState.orderReducer.pizzaOrder.total}
        </header>
        <br/>
        <ul className="main-nav">
            <li className="main-nav-li">
              <Link to="/">Home</Link>
            </li>
            <li className="main-nav-li">
              <Link to="/customer-info">Order Form</Link>
            </li>
            <li className="main-nav-li">
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        <Route path="/" exact component={PizzaList} />
        <Route path="/customer-info" component={OrderForm}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/admin" component={Admin} />
      </div>
      </Router>
    );
  }
}

const StateToProps = (reduxState) => ({
  reduxState
})
export default connect(StateToProps)(App);
