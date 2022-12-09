const router = require("express").Router();
let Material = require("../models/Material");

//insert details of new material
router.route("/add").post((req,res) => {

    const {materialType, quantity, unitPriceKG, supplierId} = req.body;

    const newMaterial = new Material({
        materialType,
        quantity,
        unitPriceKG,
        supplierId

    })

    newMaterial.save().then(()=>{
        res.json("Material added");
    }).catch((err)=>{
        console.log(err);
    })
})


//get all details of Materials 
router.route("/").get((req,res)=>{

    Material.find().then((materials)=>{
        res.json(materials);
    }).catch((err)=>{
        console.log(err);
    })
})


//update details of materials
router.route("/update/:id").put(async(req,res)=>{
    let materialId = req.params.id;

    const {materialType, quantity, unitPriceKG, supplierId} = req.body;

    const updateMaterail = {
        materialType,
        quantity,
        unitPriceKG,
        supplierId
    }

    //check if details exist to the relevant materail 
    const update = await Material.findByIdAndUpdate(materialId, updateMaterail)
    .then(()=>{
        res.status(200).send({status: "Material updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error in updating data", error: err.message});
    })
})


//delete a material
router.route("/delete/:id").delete(async(req,res)=>{
    let materialId = req.params.id;

    await Material.findByIdAndDelete(materialId)
    .then(()=>{
        res.status(200).send({status: "Material deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with deleting item", error: err.message});
    })

})


//fetching only one material to display
router.route("/get/:id").get(async(req,res)=>{
    let materialId = req.params.id;

    const material = await Material.findById(materialId)
    .then((material)=>{
        res.status(200).send({status: "Material fetched", material});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with get material", error: err.message});
    })
})

module.exports = router;
