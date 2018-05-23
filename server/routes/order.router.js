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
        _id: { type: Schema.ObjectId, ref: 'Pizza' }, // links to the Pizza schema
        name: { type: String, required: true },
        description: { type: String, required: true },
        cost: { type: Number, required: true },
        quantity: { type: Number, default: 1 }
    }],
    time: { type: Date, default: Date.now }, // Defaults to the current time
    order_total: { type: Number, required: true },
    type: { type: String } // pickup or delivery
});

const Orders = mongoose.model('Orders', OrderSchema);


// GET all orders that have been placed, populate with data from the pizza collection
router.get('/', (req, res) => {
    console.log('GET /api/order');
    // Find all orders and return them
    Orders.find({}).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log('Error GET /api/order', error);
        res.sendStatus(500);  
    });
})

// POST a new order
router.post('/', (req, res) => {
    console.log('POST /api/order', req.body);
    const pizzaOrder = req.body;
    // pizzaOrder should match the OrderSchema format
    const order = new Orders(pizzaOrder);
    order.save().then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error POST /api/order', error);
        res.sendStatus(500);
    });
});

// DELETE an order
router.delete('/:id', (req, res) => {
    console.log('DELETE /api/order', req.params.id);
    Orders.findByIdAndRemove({_id: req.params.id}).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /api/order', error);
        res.sendStatus(500);
    })
});

module.exports = router;