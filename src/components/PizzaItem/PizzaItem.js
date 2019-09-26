import React, { Component } from 'react';
import {connect} from 'react-redux'

class PizzaItem extends Component {

    addProductToCart = () => {
        console.log('btn getting click')
        console.log(this.props.product);
        this.props.dispatch({ type: 'ADD_PRODUCT_TO_CART', payload: this.props.product })        
    }

    render() {
        return (
            <>
            <div key={this.props.pizza.name} className="pizza-item">
                <div className="pizza-image">

                        <img width="150px" src={this.props.pizza.image_path}></img>
                    </div>
                    <div className="pizza-name"><h3>{this.props.pizza.name}</h3></div>
                    <div className="pizza-desc">{this.props.pizza.description}</div>
                    <div className="pizza-cost"><br></br>{this.props.pizza.price}</div>
                    <button type="button" onClick={this.addProductToCart}>Add to Cart</button>
            </div>
            </>
        )
    }
}
const StateToProps = (reduxState) => ({
    reduxState
})
export default connect(StateToProps)(PizzaItem);