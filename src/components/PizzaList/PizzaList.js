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

    addProductToCart = (pizza) => {
        console.log('btn getting click for:', pizza)
        // this.setState
        this.props.dispatch({ type: 'ADD_ORDER', payload: this.props.pizza })
        // console.log(this.props.product);

        this.updateTotal(pizza.price);
    }

    removeProductFromCart = (pizza) => {
        console.log('removing product from cart');
    }


    updateTotal = (price) => {
        console.log('this is the price:', price, 'this is the state:', this.state.total)
        this.setState ({...this.state,
            total: parseFloat(this.state.total) + parseFloat(price)
            })
        }

    handleClick = () => {
        this.props.history.push('/customer-info')
    }

    render() {
        return (
            <>
            <div className="pizza-list">
                {this.props.reduxStore.pizzaReducer.map((pizzaItem) => 
                    <PizzaItem pizza={pizzaItem} updateTotal={this.updateTotal} addProductToCart={this.addProductToCart}
                    removeProductFromCart={this.removeProductFromCart}
                    toggleOn={this.state.toggleOn}/>
                )}
            </div>
            <button onClick={this.handleClick} className="nextBtn" pizza={this.state}>NEXT</button>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PizzaList);
 