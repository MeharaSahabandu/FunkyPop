const router = require("express").Router();
const { request, response } = require("express");
let Salary = require("../models/Salary");


//add salary related details 
router.route("/add").post((req,res)=>{

    const empID = req.body.empID;
    const daysOnLeave = req.body.daysOnLeave;
    const otRate = req.body.otRate;
    const otHours = req.body.otHours;
    const basicSal= req.body.basicSal;
    const datE = req.body.datE;

    const newSalary = new Salary ({
        empID,
        daysOnLeave,
        otRate,
        otHours,
        basicSal, 
       datE
       
    })

    newSalary.save().then(()=>{
        res.json("Salary Added")
    }).catch((err)=>{
        console.log(err);
    })

})



//get all details of the emploees in the system
router.route("/").get((req,res)=>{

    Salary.find().then((salaries)=>{
        res.json(salaries)
    }).catch((err)=>{
        console.log(err)
    })

})


//getting information of one employee
router.route("/get/:id").get(async(req,res)=>{

    let userId=req.params.id;

    const sal = await Salary.findById(userId).then((salary)=>{
        res.status(200).send({status:"fetched", salary});
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error ", error:err.message})
    })
})



//update the details of employee
router.route("/update/:id").put(async (req, res)=>{
    let userId = req.params.id;
    const {empID,daysOnLeave,otRate,otHours,basicSal, datE} = req.body;

    const updateSalary = {
        empID,
        daysOnLeave,
        otRate,
        otHours,
        basicSal, 
        datE
        
    }

    await Salary.findByIdAndUpdate(userId,updateSalary).then(()=>{
        res.status(200).send({status: "Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})



//remove employee from the system
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Salary.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status : "Deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting salary details", error: err.message})
    })
})


module.exports= router;
