//this model is for the users to enter the expeses that are made in the business

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const expenseSchema = new Schema({

   

    expenseName:{ // name of the expense
        type: String,
        required: true
    },

    expenseValue:{ // the value of the expense
        type: Number,
        required: true
    },

    expenseDescription:{ // description about the expense
        type: String,
        required: true
    },


})

const expenseTracker = mongoose.model("expenseTracker", expenseSchema); // changed stockVaules to expenseTracker
module.exports = expenseTracker;
