import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {connect} from 'react-redux'

class CheckoutTable extends Component {

  componentDidMount = () => {
    this.getOrders();
  }

  // this will get all of the info from the database
  // that we need to display in the render
  // but this might not be the best place for it 
  // if we also need to access it in admin
  getOrders = () => {
    axios.get('/api/order')
    .then(response => {
      console.log(response.data)
    })
  }

  render() {
    return (
      <div className="App">
          This is the checout table!
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapStateToProps)(CheckoutTable);
