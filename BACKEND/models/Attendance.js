const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({

    empID: {
        type: String,
        required: true
    },

    datE:{
        type:String,
        required: true
    },

    total:{
        type : Number,
        required: true
    }
})

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports= Attendance;