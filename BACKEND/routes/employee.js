const router = require("express").Router();
const { request, response, json, application } = require("express");
let Employee = require("../models/Employee");
const bcrypt = require ("bcryptjs");
const jwt = require('jsonwebtoken'); 
const JWT_SECRET_KEY = "EmpKey";




//register new employees to the system
router.route("/add").post(async(req,res)=>{

    const name= req.body.name;
    const NIC= req.body.NIC;
    const address= req.body.address;
    const contactnumber = req.body.contactnumber;
    const Position = req.body.Position;
    const username= req.body.username;
    const password = req.body.password;

    let existingEmp;

    try{
        existingEmp = await Employee.findOne({username:username});
    }catch(err){
        console.log(err)
    }if(existingEmp){
        return res.status(400).json({message:"Employee Already exists .."});
    }

    const hashedPassword = bcrypt.hashSync(password);


    const newEmployee = new Employee({
        name,
        NIC,
        address,
        contactnumber,
        Position,
        username,
        password : hashedPassword
    })


    newEmployee.save().then(()=>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })

})


//employee login
router.route("/login").post(async(req, res, next)=>{
    const {username, password } = req.body;

    let existingEmp ;

    try{
        existingEmp= await Employee.findOne({username:username});
    }catch(err){
        return new Error(err);
    }
    if(!existingEmp){
        return res.status(400).json({message:"Employee Not Found. Please Register !!"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingEmp.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Invalid username or password !!"})
    }
    const token = jwt.sign({id:existingEmp._id}, JWT_SECRET_KEY, {
        expiresIn: "30s"
    });

    res.cookie(String(existingEmp._id), token, {
        path:'/',
        expires: new Date(Date.now()+1000 * 30),
        httpOnly:true,
        sameSite:'lax'
    })

    return res.status(200).json({message:"Successfully Logged In !!", employee:existingEmp, token});
})


router.route("/registeredEmp").get(async(req,res,next)=>{
    const cookies = req.headers.cookie;
 
    const token = cookies.split("=")[1];
    console.log (token);

 
    if(!token){ 
        request.status(404).json({message:"No token found"})
    }
    jwt.verify(String(token), JWT_SECRET_KEY, (err, employee)=>{
        if(err){
            return res.status(400).json({message:"Invalid token"})
        }
        console.log(employee.id);
        req.id = employee.id;
    })
   next();
 
})


router.route("/registeredEmp").get(async(req, res, next)=>{
    const eID = req.id;
    let employee ;
    try{
        employee = await Employee.findById(eID, "-password");
    }catch(err) {
        return new Error (err)
    }

    if(!employee){
        return res.status(404).json({message:"Employee not found"})
    }
    return res.status(200).json({employee})

})


//get all details of the emploees in the system
router.route("/").get((req,res)=>{

    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })

})


//update the details of employee
router.route("/update/:id").put(async (req, res)=>{
    let userId = req.params.id;
    const {name,NIC,address,contactnumber,Position,username,password} = req.body;

    const updateEmployee = {
        name,
        NIC,
        address,
        contactnumber,
        Position,
        username,
        password
    }

    const update = await Employee.findByIdAndUpdate(userId,updateEmployee).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})



//remove employee from the system
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Employee.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status : "User deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message})
    })
})



//getting information of one employee
router.route("/get/:id").get(async(req,res)=>{

    let userId=req.params.id;

    const emp = await Employee.findById(userId).then((employee)=>{
        res.status(200).send({status:"Employee fetched", employee})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get employee", error:err.message})
    })
})


module.exports= router;
