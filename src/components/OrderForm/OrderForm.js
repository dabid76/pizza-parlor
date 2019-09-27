import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

class OrderForm extends Component {

    state = {
        orderToSend: {
            customer_name: '',
            street_address: '',
            city: '',
            zip: '',
            type: 'Delivery'
        }
    }

    postOrders = () => {
        axios.post('/api/order')
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log('error in order form post ', error)
            })
    }

    handleInputChange = (event, propertyName) => {
        this.setState({
            orderToSend: {
                ...this.state.orderToSend,
                [propertyName]: event.target.value
            }
        })
    }
    handleRadioInput = (deliveryOrPickup) => {
        this.setState({
            orderToSend: {
                ...this.state.orderToSend,
                type: deliveryOrPickup
            }
        })
    }

    handleSubmit = () => {
        console.log(this.state)
        this.props.history.push('/checkout')
        this.props.dispatch({ type: 'ORDER_INFO_CUSTOMER', payload: this.state.orderToSend })
    }

    render() {
        return (
            <>
                <h2>Step 2: Customer Information</h2>
                <div className="order-form-flex">
                    <div className="customer-info-inputs">
                        <input placeholder="Name" onChange={(event) => this.handleInputChange(event, 'customer_name')}/><br />
                        <input placeholder="Street Address" onChange={(event) => this.handleInputChange(event, 'street_address')}/><br />
                        <input placeholder="City" onChange={(event) => this.handleInputChange(event, 'city')}/><br />
                        <input placeholder="Zip" onChange={(event) => this.handleInputChange(event, 'zip')}/><br />
                    </div>
                    <form className="customer-info-select">
                        <input type="radio" name="pizza" value="Pickup" onChange={(event) => this.handleInputChange(event, 'type')} />Pickup<br/>
                        <input type="radio" name="pizza" value="Delivery" onChange={(event) => this.handleInputChange(event, 'type')} defaultChecked/>Delivery
                    </form>
                </div>
            <button onClick={this.handleSubmit} className="nextBtn">NEXT</button>
            </>
        );
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(OrderForm);
