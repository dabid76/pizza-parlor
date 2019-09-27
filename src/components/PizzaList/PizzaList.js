import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem'
import '../App/App.css'

class PizzaList extends Component {

    state = {
        pizzaToOrder: [],
        total: 0
    }

    updateTotal = (price) => {
        console.log('this is the price:', price, 'this is the state:', this.state.total)
        this.setState ({...this.state,
            total: parseFloat(this.state.total) + parseFloat(price)
            })
        }
    handleClick = () => {
        this.props.history.push('/customer-info')
        this.props.dispatch({ type: 'ORDER_INFO_PIZZAS', payload: this.state })
    }

    render() {
        return (
            <>
            <div className="pizza-list">
                {this.props.reduxStore.pizzaReducer.map((pizzaItem) => 
                    <PizzaItem pizza={pizzaItem} updateTotal={this.updateTotal}/>
                )}
            </div>
            <button onClick={this.handleClick} className="nextBtn">NEXT</button>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PizzaList);
 