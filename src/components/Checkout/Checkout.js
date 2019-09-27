import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutTable from '../CheckoutTable/CheckoutTable'

class Checkout extends Component {

    render() {
        return (
            <>
                <CheckoutTable />
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Checkout);