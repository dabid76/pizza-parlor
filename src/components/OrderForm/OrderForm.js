import React, { Component } from 'react';
import axios from 'axios';

class OrderForm extends Component {

    postOrders = () => {
        axios.post('/api/order')
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log('error in order form post ', error)
            })
    }
    render() {
        return (
            <>
                <h2>Step 2: Customer Information</h2>
                <div className="order-form-flex">
                    <div className="customer-info-inputs">
                        <input placeholder="Name" /><br />
                        <input placeholder="Street Address" /><br />
                        <input placeholder="City" /><br />
                        <input placeholder="Zip" /><br />
                    </div>
                    <ul className="customer-info-select">
                        <li><input type="radio" />Pickup</li>
                        <li><input type="radio" defaultChecked />Delivery</li>
                    </ul>
                </div>
            </>
        );
    }
}

export default OrderForm;
