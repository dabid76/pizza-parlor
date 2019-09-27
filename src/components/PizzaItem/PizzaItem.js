import React, { Component } from 'react';
import {connect} from 'react-redux'

class PizzaItem extends Component {


    addProductToCart = () => {
        console.log('btn getting click')
        console.log(this.props.product);
        this.props.dispatch({ type: 'ADD_ORDER', payload: this.props.product })        
    }

    render() {
        return (
            <>
            <div key={this.props.pizza.name} className="pizza-item">
                <div className="pizza-image">
                        <img width="150px" src={this.props.pizza.image_path}></img>
                    </div>
                    <div className="pizza-info"><div className="pizza-description"><h3>{this.props.pizza.name}</h3>
                        <br></br>{this.props.pizza.description}</div>
                    <br></br>
                        <div className="pizza-price">{this.props.pizza.price}</div>
                    </div>
                    <button class="button" onClick={(event) => this.props.addProductToCart}>Add to Cart</button>
            </div>
            </>
        )
    }
}
const StateToProps = (reduxState) => ({
    reduxState
})
export default connect(StateToProps)(PizzaItem);