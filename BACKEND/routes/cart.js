const router = require("express").Router();
let Cart = require("../models/Cart");

//Add items to cart
router.route("/add").post((req,res)=>{
    const itemName= req.body.itemName;
    const unitPrice= req.body.unitPrice;
    const Quantity = req.body.Quantity;
    const TotalPrice = req.body.TotalPrice;

    const newCart = new Cart({
        itemName,
        unitPrice,
        Quantity,
        TotalPrice
        
    })

    
    newCart.save().then(()=>{
        res.json("Item added to cart")
    }).catch((err)=>{
        console.log(err);
    })

})
   
//get all details of the items in cart
router.route("/").get((req,res)=>{

    Cart.find().then((carts)=>{
        res.json(carts)
    }).catch((err)=>{
        console.log(err)
    })

})

//update the details of items in cart
router.route("/update/:id").put(async (req, res)=>{
    let cartId = req.params.id;
    const {itemName,unitPrice,Quantity,TotalPrice} = req.body;

    const updateCart = {
        itemName,
        unitPrice,
        Quantity,
        TotalPrice
    }

    const update = await Cart.findByIdAndUpdate(cartId,updateCart).then(()=>{
        res.status(200).send({status: "Cart Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

//delete items from cart
router.route("/delete/:id").delete(async(req,res)=>{
    let cartId = req.params.id;

    await Cart.findByIdAndDelete(cartId).then(()=>{
        res.status(200).send({status : "Item deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deletion", error: err.message})
    })
})

//getting information of one cart
router.route("/get/:id").get(async(req,res)=>{

    let cartId=req.params.id;

    const onecart = await Cart.findById(cartId).then((cart)=>{
        res.status(200).send({status:"Cart fetched", cart})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with retreiving information", error:err.message})
    })
})



module.exports= router;
