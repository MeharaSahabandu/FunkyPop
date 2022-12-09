const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },

    unitPrice :{
        type : String,
        required: true
    },

    Quantity: {
        type : String,
        required:true
    },

    TotalPrice : {
        type: String,
        
    }

});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
