const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusSchema = new Schema({
    Status: {
        type:String,
        default:'Order Placed'
       
    },
    Date: {
        type:Date,
        default:new Date()
       
    }

})



const deliverySchema = new Schema({
    OrderID:{
        type:String,
        default: 'FunkyPop_1000'
    },
    
    ReciverName:{
        type:String,
        required: true
    },

    Address:{
        type:String,
        required: true
    },

    TelNo:{
        type:Number,
        required: true,
        minlength: 10,
    },

    Email:{
        type:String,
        
    },

    Instructions:{
        type:String,
        
    },
   
    OrderPlacedDate:{
        type:Date,
        default: new Date(),
    },

    EssitimateDate:{
        type:Date,
        default:new Date().setDate(new Date().getDate() + 7),
    },
    Status:[statusSchema],

    CurrentStatus:{
            type: String,
            default:'Order Placed'    
        }
    ,
    DriverName: {
        type:String,
        default:'Not Assign Yet',
       
    }
    
})

const Delivery = mongoose.model('Deliveries',deliverySchema);

module.exports = Delivery;
