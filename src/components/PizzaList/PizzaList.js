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
        this.setState({
            ...this.state,
            pizzaToOrder:[...this.state.pizzaToOrder, pizza]
        })
    
        this.props.dispatch({ type: 'UPDATE_TOTAL', payload: this.state.total })

        this.updateTotal(pizza.price);
        console.log('state!', this.state)
    }

    removeProductFromCart = (pizzaItem) => {
        console.log('removing product from cart');
        this.props.dispatch({ type: 'DELETE_PRODUCT', payload: pizzaItem })

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
 