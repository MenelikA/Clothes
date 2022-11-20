const Order = require('../models/orders');
const express = require('express');
const router = express.Router();
const db = require('../db');
const uuid = require('uuid');

// add an order
router.post('/', async (req, res) => {
    const order = await Order.create({
        id: uuid.v4(),
        date: new Date(),
        customer_name: req.body.customer_name,
        customer_address: req.body.customer_address,
        customer_credit_card_number: req.body.customer_credit_card_number,
        products: req.body.products,
    });
    res.send(order);
});

module.exports = router;