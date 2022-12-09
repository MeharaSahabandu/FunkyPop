const router = require("express").Router();
const delivery = require("../models/delivery");
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");
const JWT_SECREAT_KEY ="MyKey";

//add delivery details
router.route("/addDelivery").post(async(req,res,next)=>{
    

    const {ReciverName,Address,TelNo,Email,Instructions,OrderID}  = req.body;
    var status= {Status:'Order Placed',Date:new Date()};
    
    const newDelivery= new delivery({
        OrderID,
        ReciverName,
        Address,
        TelNo,
        Email,
        Instructions,
        Status:status 
    })


    
    newDelivery.save().then(()=>{
        
        return res.status(200).json({message: "Your Delivery details saved successfully."});
       
    }).catch((err)=>{
        console.log(err);
    }) 

})

//all delivery
router.route("/AllDeliveries").get((req,res)=>{
    delivery.find().then((delivery)=>{
        return res.status(200).json(delivery)
    }).catch((err)=>{
        console.log(err)
    })
});

//get last orders ID
router.route("/orderID").get((req,res)=>{
    delivery.find({}).sort({_id : -1}).limit(1).then((result)=>{
        let OrderID;
        const id=result[0].OrderID
        if(id==='')
        {
           OrderID ="FonkeyPop_1000"
        } 
        else{
            
            const number= parseInt(id.split('_')[1])+ 1 ;
            OrderID ="FonkeyPop_"+number;
        }
        res.status(200).json(OrderID)
    }
    )
});

//update Delivery
router.route("/updateDelivery").post(async(req,res,next)=>{

    
    const deliveryId = req.params.id;

    const {ReciverName,Address,TelNo,Email,Instructions}  = req.body;
    
    const updateDelivery= {
        ReciverName,
        Address,
        TelNo,
        Email,
        Instructions, 
    }

    await delivery.findByIdAndUpdate(deliveryId,updateDelivery,{
        new:true
       }).then(() =>{
            res.status(200).json({status:"Delivery Status updated successfully"});
        }).catch((err) =>{
            console.log(err);
            res.status(200).json({status:"Error with update delivery Status"});
        })  
    
    

})
//update order delivery status
router.route("/status/:id").put(async(req,res)=>{
    const deliveryId = req.params.id;
    const {CurrentStatus}  = req.body;
    var status= {Status:CurrentStatus,Date:new Date()};
    console.log(CurrentStatus);
    
    const updateDelivery= {
        CurrentStatus,
        $push:{Status:status}
        
    }
   
   await delivery.findByIdAndUpdate(deliveryId,updateDelivery,{
    new:true
   }).then(() =>{
        res.status(200).json({status:"Delivery Status updated successfully"});
    }).catch((err) =>{
        console.log(err);
        res.status(400).json({status:"Error with update delivery Status"});
    })  
})

//delete delivery
router.route("/delete/:id").delete(async(req,res)=>{
    let deliveryId = req.params.id;
    await delivery.findByIdAndDelete(deliveryId).then(()=>{
        res.status(200).json({status:"Delivery  deleted successfully"});
    }).catch((err) =>{
        console.log(err);
        res.status(400).json({status:"Error with delete delivery"});
    })
})

//get orderdetails by orderid
router.route("/orderID/").post(async(req,res)=>{

    const {OrderID} = req.body
    console.log(OrderID);
         
    const order = await delivery.find({OrderID:OrderID}).then((order)=>{
        return res.status(200).json(order)
    }).catch((err)=>{
        return res.status(400).json(err,OrderID)
    })

    
});
//Assign driver
router.route("/driver/:id").put(async(req,res)=>{
    const deliveryId = req.params.id;
   
   await delivery.findByIdAndUpdate(deliveryId,req.body,{
    new:true
   }).then(() =>{
        res.status(200).json({status:"Delivery Status updated successfully"});
    }).catch((err) =>{
        console.log(err);
        res.status(200).json({status:"Error with update driver"});
    })  
})

//A driver's order

router.route("/order/").post(async(req,res)=>{

    
    const {driverName} = req.body
    console.log(driverName);
         
    const order = await delivery.find({DriverName:driverName}).then((order)=>{
        return res.status(200).json(order)
    }).catch((err)=>{
        return res.status(400).json(err,driverName)
    })
    
});
    
router.route("/order/:driverName,:CurrentStatus,:OrderPlacedDate,:EstimateDate").get(async(req,res)=>{

    try{
        const driverName = req.params.driverName;
        const CurrentStatus= req.params.CurrentStatus;
        const OrderPlacedDate= req.params.OrderPlacedDate;
        const EstimateDate= req.params.EstimateDate;

        const order = await delivery.find({DeliveryDriver:driverName},{CurrentStatus:CurrentStatus},{OrderPlacedDate:OrderPlacedDate},{EssitimateDate:EstimateDate});
        return res.status(200).json({order});
    }catch(err){
        return res.status(422).json(err);
    }

    

    
});
module.exports = router;
