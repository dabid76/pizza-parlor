import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {

    render() {
        return (
            <>
            {/* In /checkout, 
            This component will include CheckoutTable and UserInfo */}
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Checkout);