import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../UserInfo/UserInfo';
import CheckoutTable from '../CheckoutTable/CheckoutTable';

class Checkout extends Component {

    checkoutSubmit = () => {
        this.props.history.push('/');
      }

    render() {
        return (
            <>
                <UserInfo />
                <CheckoutTable />
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Checkout);