import React, { Component } from 'react';
import {connect} from 'react-redux'
// import axios from 'axios';

class UserInfo extends Component {

    render() {
        const customerInformation = this.props.reduxStore.orderReducer.customerInfo;
        return (
            <div className="userInfo">
            Name: {customerInformation.customer_name}<br/>
            Address:<br/>
            {customerInformation.street_address}<br/>
            {customerInformation.city} {customerInformation.zip}
            <p>
                Delivery/Pickup: {customerInformation.type}
            </p>
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(UserInfo);