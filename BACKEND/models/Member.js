const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: String,
        required: true
    },

    Address: {
        type: String,
    },

    mobileNumber: {
        type: String,
        required: true
    },

    emailAddress:{
        type: String,
    },

    userName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
