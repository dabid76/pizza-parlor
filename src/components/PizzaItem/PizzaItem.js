import React, { Component } from 'react';
import {connect} from 'react-redux'

class PizzaItem extends Component {


    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
            </div>
        )
    }
}
const StateToProps = (reduxState) => ({
    reduxState
})
export default connect(StateToProps)(PizzaItem);