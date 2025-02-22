import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem'
import '../App/App.css'

class PizzaList extends Component {

    state = {
        pizzaToOrder: [],
        total: 0
    }

    addProductToCart = (pizza) => {
        console.log('btn getting click for:', pizza);
        this.state.pizzaToOrder.push(pizza);
        console.log('this is the pizza in the state:', this.state)

        this.updateTotal(pizza.price);
    }

    removeProductFromCart = (pizza) => {
        console.log('removing product from cart. State:', this.state);
        let index = this.state.pizzaToOrder.indexOf(pizza);
        let newList = this.state.pizzaToOrder
        newList.splice(index, 1)
        this.setState({
            ...this.state,
            pizzaToOrder: newList,
            total: parseFloat(this.state.total) - parseFloat(pizza.price)
        })

        console.log('newlist', newList)
    }


    updateTotal = (price) => {
        console.log('this is the price:', price, 'this is the state:', this.state.total)
        this.setState({...this.state,
            total: parseFloat(this.state.total) + parseFloat(price)
        })
        return this.props.dispatch({ type: 'UPDATE_TOTAL', payload: this.state.total })
    }

    handleClick = () => {
        this.props.history.push('/customer-info')
        this.props.dispatch({ type: 'ORDER_INFO_PIZZAS', payload: this.state })
    }

    render() {
        return (
            <>
            Order Total: ${this.state.total}
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
 