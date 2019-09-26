import React, { Component } from 'react';
import axios from 'axios';

class PizzaList extends Component {
    render() {
        return (
            <>
                {props.reduxStore.bookList.map((book, index) =>
                    <li key={index}>{book.title} by {book.author}</li>
                )}
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PizzaList);
 