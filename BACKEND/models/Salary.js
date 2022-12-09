const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const salarySchema = new Schema({

    empID:{

        type:String,
        required: true
    },

    daysOnLeave:    {
        type: Number,
        required: true
    },

    otRate:{
        type: Number,
        required: true
    },

    otHours:{
        type: Number,
        required: true
    },

    basicSal:{
        type: Number,
        required: true
    },

    datE:{
        type:String,
        
    },

    totSalary: {
        type: Number,
        
    }

})


const Salary = mongoose.model("Salary", salarySchema);

module.exports= Salary;
