const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    FirstName:{
        type:String,
        required: true
    },

    LastName:{
        type:String,
        required: true
    },

    Age:{
        type:Number,
        required: true,
        minlength: 10,
    },

    Gender:{
        type:String,
        enum: ["Male","Female"],
       required: true
    },

    NIC:{
        type:String,
        required: true,
        //unique: true,
        minlength:10,
        maxlength: 12
    },

    MobileNo:{
        type:Number,
       required: true,
        minlength: 10,
    },

    Address:{
        type:String,
        required: true,
        unique: true,
    },

    Email:{
        type:String,
        required: true,
        //unique: true,
    },

    
    Password:{
        type:String,
        required: true,
        minlength: [6,'Password should be at least 6 characters'],
    },
    RegisterdDate:{
        type:Date,
        default:new Date()
      
    },

    LicenceNo: {
        type:String,
        required:true,
        default:'Null',
       
    },

    VehicleType: {
        type:String,
        required:true,
        
       
    },

    VehicleNo: {
        type:String,
        required:true,    
    },

    Files:{
        type:String,
       
    },

    Account:{
        type:String,
        enum: ["Active","Inactive"],
		default: "Inactive",
    },
    Status:{
        type:String,
        enum: ["Online","Offline"],
		default: "Offline",
    },
})

const Delivery = mongoose.model('DeliveryDriver',driverSchema);

module.exports = Delivery;
