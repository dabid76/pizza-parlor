import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

let order = {
    pizzaOrder: {},
    customerInfo: []
}

const pizzaReducer = (state = [], action) => {
    if (action.type === 'LIST_PIZZAS') {
        console.log('payload', action.payload)
        return action.payload
    } else if (action.type === 'ADD_TOTAL') {
        console.log('payload', action.payload)
        return action.payload
    }
    return state;
}

const orderReducer = (state = order, action) => {
    if (action.type === 'ORDER_INFO_PIZZAS') {
        console.log('payload', action.payload)
        return {
            ...state,
            pizzas: action.payload
        }
    } else if (action.type === 'ORDER_INFO_CUSTOMER') {
        console.log('payload', action.payload)
        return {
            ...state,
            customerInfo: action.payload
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
