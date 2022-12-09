const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const materialSchema = new Schema({

   
    materialType: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unitPriceKG: {
        type: Number,
        required: true
    },
    supplierId: {
        type: String,
        required: true
    }
    //comment

})

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
