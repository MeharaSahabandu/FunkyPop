const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemsQtySchema = new Schema({

    itemName :{
        type: String,
        required: true
    },
    EndOfMonth: {
        type: String,
        required: true
    },
    AddedQty: {
        type: Number
    },
    differenceQty: {
        type: Number,
        required: true
    }
})

const ClothingQty = mongoose.model("ClothingQty", itemsQtySchema);

module.exports = ClothingQty;
