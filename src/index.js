import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const pizzaReducer = (state = [], action) => {
    // if (action.type === 'LIST_PIZZAS') {
    //     return action.payload
    // }
    return state;
}

const orderReducer = (state = [], action) => {
    // if (action.type === 'ADD_ORDER') {
    //     return action.payload
    // }
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

