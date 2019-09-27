import React, { Component } from 'react';
import {connect} from 'react-redux'
// import axios from 'axios';

class UserInfo extends Component {
    render() {
        return (
            <>
            User Info
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(UserInfo);