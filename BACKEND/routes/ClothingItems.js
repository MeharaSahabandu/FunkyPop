const router = require("express").Router();
let ClothingItem = require("../models/ClothingItem");

//insert details of new clothing item
router.route("/add").post((req,res) =>{

    const itemName = req.body.itemName;
    const itemDescription = req.body.itemDescription;
    const Quantity = Number(req.body.Quantity);
    const unitPrice = Number(req.body.unitPrice);

    const newItem = new ClothingItem({

        itemName,
        itemDescription,
        Quantity,
        unitPrice

    })

    newItem.save().then(()=>{
        res.json("ClothingItem added")
    }).catch((err)=>{
        console.log(err)
    })

})

//get all details of the clothing items
router.route("/").get((req,res) => {

    ClothingItem.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err);
    })
})


//Update details of clothing items 
router.route("/update/:id").put(async (req,res) =>{
    let itemId = req.params.id;

    const {itemName, itemDescription, Quantity, unitPrice} = req.body;

    const updateItem = {
        
        itemName,
        itemDescription,
        Quantity,
        unitPrice
    }

    //check if the details exist related to the releavant id
    const update = await ClothingItem.findByIdAndUpdate(itemId, updateItem)
    .then(() =>{
        res.status(200).send({status: "Clothing Item updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error in updating data", error: err.message});
    })

})


//delete a clothig item
router.route("/delete/:id").delete(async (req,res) =>{
    let itemId = req.params.id;
    
    await ClothingItem.findByIdAndDelete(itemId)
    .then(() =>{
        res.status(200).send({status: "Clothing Item deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with deleting item", error: err.message});
    })
})


//fetch only one item to display
router.route("/get/:id").get(async (req,res)=>{
    let itemId = req.params.id;

    const item = await ClothingItem.findById(itemId)
    .then((item)=>{
        res.status(200).send({status: "Clothing Item fetched", item});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with get item", error: err.message});
    })

})

module.exports = router;
