import React, { Component } from 'react';
import {connect} from 'react-redux'

class PizzaItem extends Component {


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
            </div>
            </>
        )
    }
}
const StateToProps = (reduxState) => ({
    reduxState
})
export default connect(StateToProps)(PizzaItem);