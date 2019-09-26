import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';


const pizzaList = (state = [], action) => {
    // if (action.type === 'LIST_PIZZAS') {
    //     return action.payload
    // }
    // TODO - set book list with data from server
    return state;
}

const reduxStore = createStore(
    combineReducers({
        pizzaList
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



ReactDOM.render(<App />, document.getElementById('root'));
