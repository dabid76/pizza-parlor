const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const PizzaSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    cost: { type: Number, required: true }
});

PizzaSchema.virtual('pizza_order', {
    ref: 'Orders',
    localField: '_id',
    foreignField: 'pizzas._id'
});

const Pizza = mongoose.model('Pizza', PizzaSchema);

router.get('/', (req, res) => {
    Pizza.find({}).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log('Error GET /pizza', error)
        res.sendStatus(500);
    });

})

module.exports = router;