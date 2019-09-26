import React, { Component } from 'react';
import {connect} from 'react-redux'

class PizzaItem extends Component {


    render() {
        return (

                    <li>
                        <button onClick={this.addProductToCart}>Add to Cart</button>
                    </li>
        )
    }
}
const StateToProps = (reduxState) => ({
    reduxState
})
export default connect(StateToProps)(PizzaItem);