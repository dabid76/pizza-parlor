import React, { Component } from 'react';
import {connect} from 'react-redux'
// import axios from 'axios';

class UserInfo extends Component {
    render() {
        // const = this.props.reduxState
        return (
            <>
            User Info (name, address, city, zip)
            </>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapStateToProps)(UserInfo);