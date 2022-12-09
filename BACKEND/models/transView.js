const Schema = mongoose.Schema;
const mongoose = require("mongoose");
const transVSchema = new Schema({

    transNumber:{ // transaction number 
        type: number,
        required: true
    },

    tDescription:{ // description of the transaction
        type: String,
        required: ture
    },

    tValue:{ // the total value of the transaction
        type : number,
        required: true
    },

    tDeduction:{ // if there are any discounts or exceptions the value that will be deducted is mentioned here.
        type: number,
        required: true
    }
})

const transView = mongoose.model("transView", transVSchema);
module.export = transView;
