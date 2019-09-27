import React, { Component } from 'react';
import {connect} from 'react-redux'

class CheckoutTable extends Component {

  render() {
    const pizzas = this.props.reduxStore.orderReducer.pizzaOrder.pizzaToOrder
    const total = this.props.reduxStore.orderReducer.pizzaOrder.total
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Cost</td>
            </tr>
          </thead>
          <tbody>
            {/* {pizzas.map(pizza => {
              return <tr><td>{pizza.name}</td><td>{pizza.price}</td></tr>
            })} */}
          </tbody>
          <h2>{total}</h2>
        </table>
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(CheckoutTable);
