import React, { Component } from 'react';
import {connect} from 'react-redux'
// import axios from 'axios';

class UserInfo extends Component {

    componentDidMount = () => {
        console.log("UserInfo loaded");
    }

    render() {
        const customerInformation = this.props.reduxState.orderReducer.customerInfo;
        return (
            <div className="userInfo">
            {customerInformation}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapStateToProps)(UserInfo);