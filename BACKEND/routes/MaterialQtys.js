const router = require("express").Router();
let MaterialQty = require("../models/MaterialQty");

//insert details of material Qtys at end of month
router.route("/add").post((req,res) =>{

    const {materialType, EndOfMonth, AddedQty, differenceQty} = req.body;

    const newMaterialEnd = new MaterialQty({
        materialType,
        EndOfMonth,
        AddedQty,
        differenceQty
    })

    
})

//show details of materials Qtys
