import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutTable from '../CheckoutTable/CheckoutTable'
import UserInfo from '../UserInfo/UserInfo';
import CheckoutTable from '../CheckoutTable/CheckoutTable';
// import axios from 'axios'

class Checkout extends Component {

    handleSubmit = () => {
        const customerInfo = this.props.reduxState.orderReducer.customerInfo
        const pizzaOrder = this.props.reduxState.orderReducer.pizzaOrder
        const pizzas = pizzaOrder.pizzaToOrder.map(pizza => {
            return {
                id: pizza.id,
                quantity: 1
            }
        })
        const orderToSend = {
            customer_name: customerInfo.customer_name,
            street_address: customerInfo.street_address,
            city: customerInfo.city,
            zip: customerInfo.zip,
            type: customerInfo.type,
            total: pizzaOrder.total,
            pizzas: pizzas
        }
        console.log(orderToSend)
        // axios.post('/api/order', orderToSend)
        //     .then(response => {
        //         console.log('posted to order database', orderToSend)
        //         this.props.history.push('/')
        //     }).catch(error => {
        //         console.log('error in posting the order', error)
        // })
        
    }

    render() {
        return (
            <>
                <UserInfo />
                <CheckoutTable />
                <button onClick={this.handleSubmit} className="nextBtn">CHECKOUT</button>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Checkout);