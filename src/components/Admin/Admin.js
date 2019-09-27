import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class Checkout extends Component {
    state = {
        adminOrders: []
    }

    getOrders = () => {
        axios.get('/api/order')
            .then(response => {
                this.setState({
                    adminOrders: response.data
                })
            }).catch(error => {
                console.log('error in getOrders', error)
            })
    }
    
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {this.state.adminOrders.map((order) => (
                            <tr>
                                <td>{order.customer_name}</td>
                                <td>{order.time}</td>
                                <td>{order.type}</td>
                                <td>{order.cost}</td>
                            </tr>
                            )
                        )}
                </tbody>
            </table>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(Checkout);