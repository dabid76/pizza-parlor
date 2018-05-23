const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const PizzaSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    cost: { type: Number, required: true },
    image_path: { type: String, required: true }
});

const Pizza = mongoose.model('Pizza', PizzaSchema);

router.get('/', (req, res) => {
    console.log('GET /api/pizza');
    Pizza.find({}).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log('Error GET /api/pizza', error)
        res.sendStatus(500);
    });
})

module.exports = router;