const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name : {
        type: String,
        required : true
    },

    NIC :{
        type : String,
        required: true
    },

    address: {
        type : String,
        required:true
    },

    contactnumber : {
        type: String,
        required: true, 
    },

    Position : {
        type: String,
        required: true
    },

    username: {
        type:String,
        required: true, 
        unique: true
    },

    password:{
        type:String,
        required:true, 
        minlength:6
    }

})


const Employee = mongoose.model("Employee", employeeSchema);

module.exports= Employee;
