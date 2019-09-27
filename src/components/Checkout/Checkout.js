import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutTable from '../CheckoutTable/CheckoutTable'

class Checkout extends Component {

    checkoutSubmit = () => {
        this.props.history.push('/');
      }

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