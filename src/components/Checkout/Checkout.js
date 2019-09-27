import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutTable from '../CheckoutTable/CheckoutTable';
import UserInfo from '../UserInfo/UserInfo';


class Checkout extends Component {

    render() {
        return (
            <div>
                <h1>Step 3: Checkout</h1>
                <UserInfo/>
                <br/>
                <CheckoutTable/>
                <br/>
                <button onClick={this.handleSubmit}>Checkout</button>
            </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Checkout);