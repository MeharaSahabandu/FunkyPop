//this model is for the users to view the values of stocks available in the busines

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sValueSchema = new Schema({

    entryName:{
        type: String,
        required: true
    },

    entryValue:{
        type: Number,
        required: true
    },

    totalValue:{
        type : number,
        required: true
    }
})

const stockValue = mongoose.model("stockValue", sValueSchema);
module.export = stockValue;
