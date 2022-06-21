const mongoose = require('mongoose');

const ProductDataSchema = new mongoose.Schema({
    name:'String',
    quantity:"String",
    price:"Number",
    brand:"String"
});

module.exports = mongoose.model("products",ProductDataSchema);