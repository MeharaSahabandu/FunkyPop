const router = require("express").Router();
const { request, response } = require("express");
let Attendance = require("../models/Attendance");


//add attendance details of an employee
router.route("/add").post((req,res)=>{

    
    
    const empID = req.body.empID;
    const datE=req.body.datE;
    const total= req.body.total;

    const newAtt = new Attendance({
        datE, 
        empID,
        total
        
    })

    newAtt.save().then(()=>{  
        res.json("Attendance Added")
    }).catch((err)=>{
        console.log(err);
    })
})



//get all attendance details of employees
router.route("/").get((req,res)=>{

    Attendance.find().then((attendances)=>{
        res.json(attendances)
    }).catch((err)=>{
        console.log(err)
    })

})


//get attendance details of one employee
router.route("/get/:id").get(async(req,res)=>{

    let userId=req.params.id;

    const att = await Attendance.findById(userId).then((attendance)=>{
        res.status(200).send({status:"Employee fetched", attendance})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get employee", error:err.message})
    })

})

//update the details
router.route("/update/:id").put(async(req,res)=>{
    let userID = req.params.id;
    const {empID,datE, atten}= req.body;

    const updateAttendance={
        empID,
        datE,
        atten
    }

    const update= await Attendance.findByIdAndUpdate(userID,updateAttendance).then(()=>{
        res.status(200).send({status: "Attendance Details Updated "})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message});
    })
})


//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Attendance.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status : "Deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting attendace details", error: err.message})
    })
})

module.exports= router;