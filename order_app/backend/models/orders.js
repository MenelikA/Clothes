const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    id: { type: String, required: true },
    date: { type: Date, required: true },
    customer_name: { type: String, required: true },
    customer_address: { type: String, required: true },
    customer_credit_card_number: { type: String, required: true },
    products: { type: Array, required: true },
});

module.exports = mongoose.model("Orders", orderSchema);