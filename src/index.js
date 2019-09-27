import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

let order = {
    pizzas: [],
    customerInfo: []
}

const pizzaReducer = (state = [], action) => {
    if (action.type === 'LIST_PIZZAS') {
        return action.payload
    }
    return state;
}

const orderReducer = (state = order, action) => {
    if (action.type === 'ORDER__INFO_PIZZAS') {
        return {
            ...state,
            pizzas: [action.payload]
        }
    } else if (action.type === 'ORDER__INFO_CUSTOMER') {
        return {
            ...state,
            customerInfo: [action.payload]
        }
    }
    return state;
}

const lineItemReducer = (state = [], action) => {
    // if (action.type === 'LIST_ORDERS_ADMIN') {
    //     return action.payload
    // }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        pizzaReducer,
        orderReducer,
        lineItemReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
