const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const db = require("../db");

const Product = require("../models/products");

// add a product
router.post("/", async (req, res) => {
    const product = await Product.create({
        id: uuid.v4(),
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
    });
    res.send(product);
});

// get all products
router.get("/", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

// get all categories
router.get("/categories", async (req, res) => {
    const categories = await Product.distinct("category");
    res.send(categories);
});

module.exports = router;
