const router = require("express").Router();
const express = require('express')
const drivers = require("../models/driver");
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");
const JWT_SECREAT_KEY ="MyKey";
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());





//SignUp
router.route("/signup").post([

],async(req,res,next)=>{

    const {FirstName,LastName,Age,Gender,NIC,MobileNo,Address,Email,Password,LicenceNo,VehicleType,VehicleNo}  = req.body;
    const hashPassword =await bcrypt.hash(Password, 10);
    console.log(Email);
    let existingUser;
    let existingNIC;
    try{
        existingUser = await drivers.findOne({Email:Email});
        existingNIC = await drivers.findOne({NIC:NIC});
    }
    catch(err){
        console.log(err)
    }
    if(existingUser){
        return res.status(406).json({message: "User already exists! Login Insted"});
    }

   else if(existingNIC){
        return res.status(419).json({message: "NIC already exists! Login Insted"});
    }
    
    /*else if(!FirstName||!LastName||!Age||!Gender||!NIC||!MobileNo||!Address||!Email||!Password||!LicenceNo||!VehicleType||!VehicleNo){
        res.status(400).send({message:"Plz fill the data"});
    }*/
    
    //var file=req.files.Files;
   
    //console.log(file.name);

    const newDriver= new drivers({
        FirstName,
        LastName,
        Age,
        Gender,
        NIC,
        MobileNo,
        Address,
        Email,
        Password: hashPassword,
        LicenceNo,
        VehicleType,
        VehicleNo,
        //Files:file.name     
    
    })

    newDriver.save().then(()=>{
        return res.status(200).json("Delivery Driver added successfully");
        
      
       
    }).catch((err)=>{
        console.log(err);
    }) 

    /*file.mv('../frontend/public/uploads/'+file.name,err =>{
        if(err){
            console.log(err);  
        }
        
        else{
            console.log("added");
        }
        
    })*/
    
})
//login
router.route("/login").post(async(req,res,next)=>{

    const {Email,Password}  = req.body;

    let existingUser;

    try{
        existingUser = await drivers.findOne({Email:Email});
        
    }
    catch(err){
        console.log(err)
    }
    if(!existingUser){
        return res.status(400).json({message: "User not Found. SignUp Please"});
    }
    
    const result =  await bcrypt.compare(Password, existingUser.Password);
    //const result = drivers.findOne({Password:existingUser.Password});
    
     if (!result ) {
    
        return res.status(401).json({message: "Invalid Email/Password"});
    }

    else if(existingUser.Account !== 'Active'){
        return res.status(402).json({message: "Your account is not activate Yet"})
    }
    
    
        const token = jwt.sign({id:existingUser._id},JWT_SECREAT_KEY,{
            expiresIn:"7d"
        });
        res.cookie(String(existingUser._id),token,{
            path: '/',
           // expires: new Date(Date.now()+1000*30),
           expiresIn:"7d",
            httpOnly: true,
            sameSite: 'lax'
        });
        return res.status(200).json({message: "Successfully Loged In",user:existingUser,token});
        
   
});




//verify token
router.route("/user").get((req,res,next)=>{


        const cookies = req.headers.cookie;
        const token = cookies.split('=')[1].split(';')[0];
       console.log(token);
        //const headers = req.headers["authorization"];
        //const token = headers.split("=")[1];
        //console.log("tok",token);
        
    if(!token){
        res.status(404).json({message:"No token found"})
    }
    console.log(token);
    jwt.verify(String(token), JWT_SECREAT_KEY, (err, user) => {
        if(err){
            return res.status(400).json({message:"Invalid Token"});;
        }
        //return res.status(400).json({message:"valid Token"});
        //console.log(user.id);
        req.id = user.id;
        console.log(user.id)
    });
    next();
});

router.route("/refresh").get((req,res,next)=>{
    const cookies = req.headers.cookie;
    const prevToken = cookies.split('=')[1].split(';')[0];
    if(!prevToken) {
        return res.status(400).json({message:'No token Found'})
    }
    jwt.verify(String(token), JWT_SECREAT_KEY, (err, user) => {
        if(err){
            return res.status(400).json({message:"Invalid Token"});;
        }
        //return res.status(400).json({message:"valid Token"});
        //console.log(user.id);
        res.clearCookie('${user.id}');
        req.cookies['${user.id}'] = "";

        const token=jwt.sign({id: user.id}, JWT_SECREAT_KEY,{
            expireIn: "7d"
        });
        res.cookie(String(user._id),token,{
            path: '/',
           // expires: new Date(Date.now()+1000*30),
           expiresIn:"7d",
            httpOnly: true,
            sameSite: 'lax'
        });
        req.id = user.id;
        return res.status(200).json({message: "Successfully Loged In",user:existingUser,token})
        
    });
});

//get user details
router.route("/user").get(async(req,res,next)=>{
    const userId = req.id;
    
    
       await drivers.findById(userId,"-Password").then((user)=>{
        
        return res.status(200).json(user)
       }
       ).catch((err)=>{
        return new Error(err)
    })

  
});

router.route("/logout").post(async(req,res,next)=>{
    const cookies = req.headers.cookie;
    const token = cookies.split('=')[1].split(';')[0];
    console.log(cookies);
    
        
    if(!token){
        res.status(404).json({message:"No token found"})
    }
    jwt.verify(String(token), JWT_SECREAT_KEY, (err, user) => {
        if(err){
            return res.status(400).json({message:"Invalid Token"});
        }
        res.clearCookie(user.id)
        //req.cookies[user.id]=" "
        console.log(user.id);
        req.id = user.id;
        return res.status(200).json({message:"successfully logout"});
       
    });
   

   
});


//display all drivers
router.route("/").get((req,res)=>{
    drivers.find().then((driver)=>{
        return res.status(200).json(driver)
    }).catch((err)=>{
        console.log(err)
    })
})

//single driver
router.route("/driver/:id").get(async(req,res)=>{

    const driverId = req.params.id;
    const driver = await drivers.findById(driverId).then((driver)=>{
        return res.status(200).json(driver)
    }).catch((err)=>{
        return res.status(400).json(err)
    })

    
});

//update driver details


router.route("/update/:id").put(async(req,res)=>{
    const driverId = req.params.id;
    const {FirstName,LastName,Age,Gender,NIC,MobileNo,Address,Email,LicenceNo,VehicleType,VehicleNo,Account,Status}  = req.body;

    const updateDriver= {
        FirstName,
        LastName,
        Age,
        Gender,
        NIC,
        MobileNo,
        Address,
        Email,
        LicenceNo,
        VehicleType,
        VehicleNo,
        Account,
        Status,  
    }
    
    await drivers.findByIdAndUpdate(driverId,updateDriver,{
    new:true
   }).then(() =>{
        res.status(200).json({status:"Delivery Driver updated successfully"});
    }).catch((err) =>{
        console.log(err);
        res.status(200).json({status:"Error with update driver"});
    })  
})

//update Driver Status
router.route("/updateStatus/:id").put(async(req,res)=>{
    const driverId = req.params.id;
    const{Status} = req.body;
   await drivers.findByIdAndUpdate(driverId,Status,{
    new:true
   }).then(() =>{
        res.status(200).json({status:"Your Status updated successfully"});
    }).catch((err) =>{
        console.log(err);
        res.status(200).json({status:"Error with update status"});
    })  

    
  
})

//update Password
router.route("/updatePassword/").put(async(req,res)=>{
    
    const {Email,Password} = req.body;

    const result = drivers.findOne({Email:Email});

    if(result == "")
    {
        res.status(400).json({status:"Invalid Email"});
    }
    const hashPassword =await bcrypt.hash(Password, 10);

    const changePassword = {
        Password:hashPassword
    }
   await drivers.findByIdAndUpdate(result._id,changePassword,{
    new:true
   }).then(() =>{
        res.status(200).json({status:"Password Changed successfully"});
    }).catch((err) =>{
        console.log(err);
        res.status(401).json({status:"Error with change Password"});
    })  
})

//delete driver
router.route("/delete/:id").delete(async(req,res)=>{
    let driverId = req.params.id;
    await drivers.findByIdAndDelete(driverId).then(()=>{
        res.status(200).json({status:"Delivery Driver deleted successfully"});
    }).catch((err) =>{
        console.log(err);
        res.status(200).json({status:"Error with delete driver"});
    })
})

//display active drivers
router.route("/activeDrivers").get((req,res)=>{
    drivers.find({Account:"Active",Status:"Online"}).then((driver)=>{

        
            return res.status(200).json(driver)
        

       
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;
