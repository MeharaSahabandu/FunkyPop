const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const materialQtySchema = new Schema({

    materialType: {
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

const MaterialQty = mongoose.model("MaterialQty", materialQtySchema);

module.exports = MaterialQty;
