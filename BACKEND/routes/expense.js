const router = require("express").Router();
const { request, response} = require("express");
let expense = require("../models/expenseTracker");

//route for adding expense adding an expense 
router.route("/add").post((req,res)=>{
    
    const expenseName = req.body.expenseName;
    const expenseValue = req.body.expenseValue;
    const expenseDescription = req.body.expenseDescription;

    const newExp = new expense({
        expenseName,
        expenseValue,
        expenseDescription
    })

    newExp.save().then(()=>{
        res.json("Expense Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//read route
router.route("/").get((req,res)=>{
    expense.find().then((expenseTracker)=>{ // changed stockVaules to expenseTracker
        res.json(expenseTracker)
    }).catch((err)=>{ 
        console.log(err)
    })
})

//updating route
router.route("/update/:id").put(async(req,res)=>{
    let expID = req.params.id;
    const {expenseName,expenseValue,expenseDescription} = req.body;
    console.log(expID);

    const updateExpenses ={
        expenseName,
        expenseValue,
        expenseDescription
    }

    //check if details exist to the relevant  
    const update = await expense.findByIdAndUpdate(expID,updateExpenses).then(()=>{
        res.status(200).send({status: "Expense updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error in updating data", error: err.message});
    })
})

//delete a expenses
router.route("/delete/:id").delete(async(req,res)=>{
    let expenseID = req.params.id;

    await expense.findByIdAndDelete(expenseID)
    .then(()=>{
        res.status(200).send({status: "Expense deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with deleting item", error: err.message});
    })

})

module.exports=router;
