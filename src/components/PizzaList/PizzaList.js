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
        this.setState ({...this.state,
            total: parseFloat(this.state.total) + parseFloat(price)
            })
        this.props.dispatch({ type: 'ADD_TOTAL', payload: this.state.total})
        }

    render() {
        return (
            <>
            <div className="pizza-list">
                {this.props.reduxStore.pizzaReducer.map((pizzaItem) => 
                    <PizzaItem pizza={pizzaItem} updateTotal={this.updateTotal}/>
                )}
            </div>
            <button onClick={this.props.handleClick} className="nextBtn">NEXT</button>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PizzaList);
 