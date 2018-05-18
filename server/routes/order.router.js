const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Mongoose schema for Orders
const OrderSchema = new Schema({
    customer: { 
        name: { type: String },
        street_address: { type: String },
        city: { type: String },
        zip: { type: Number }
    },
    pizzas: [{ 
        _id: false,
        pizza: { type: Schema.ObjectId, ref: 'Pizza' }, // links to the Pizza schema
        quantity: { type: Number, default: 1 }
    }],
    order_total: { type: Number, required: true },
    type: { type: String } // pickup or delivery
});

const Orders = mongoose.model('Orders', OrderSchema);


// GET all orders that have been placed, populate with data from the pizza collection
router.get('/', (req, res) => {
    console.log('GET /order');
    // populate will 'join' the pizzas in the order with the Pizza collection
    Orders.find({}).populate('pizzas.pizza_id').then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log('Error GET /order', error);
        res.sendStatus(500);  
    });
})

// POST a new order
router.post('/', (req, res) => {
    console.log('POST /order', req.body);
    const pizzaOrder = req.body;
    const order = new Orders(pizzaOrder);
    order.save().then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error POST /order', error);
        res.sendStatus(500);
    });
});

// DELETE an order
router.delete('/:id', (req, res) => {
    Orders.findByIdAndRemove({_id: req.params.id}).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /order', error);
        res.sendStatus(500);
    })
});

module.exports = router;