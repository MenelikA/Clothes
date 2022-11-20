const mongoose = require("mongoose");

const dbSuccess = () => console.log("Connected to MongoDB");
const dbError = (err) => console.log("Error connecting to MongoDB", err);

module.exports = mongoose.connect("mongodb://localhost:27017/storedb", dbSuccess, dbError);