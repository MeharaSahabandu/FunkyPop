const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({

    
    itemName:{
        type : String,
        required: true
    },
    itemDescription : {
        type: String,
        required: true
    },
    Quantity:{
        type: Number,
        required: true
    },
    unitPrice:{
        type: Number
    }
  
})

const ClothingItem = mongoose.model("ClothingItems", itemSchema);

module.exports = ClothingItem;
