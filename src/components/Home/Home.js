import React, { Component } from 'react';
import '../App/App.css';
import PizzaList from '../PizzaList/PizzaList'

class App extends Component {

    handleClick = () => {
        this.props.history.push('/customer-info')
    }

// needs a state to hold the 

    render() {
        return (
            <div className="App">
                {/* Displays the current order total */}
                <PizzaList handleClick={this.handleClick}/>
            </div>
        );
    }
}

export default App;
