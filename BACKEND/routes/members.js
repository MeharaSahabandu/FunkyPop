const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;
const { Router } = require("express");
const Member = require("../models/Member.js");

router.route("/memberSignup").post(async (req,res, next) => {
    const { firstName , lastName , dateOfBirth , Address , mobileNumber , emailAddress , userName , password } = req.body;

    let existingUser;

    try{
        existingUser = await Member.findOne({ userName: userName });
    }catch(error) {
        console.log(error);
    }
    if (existingUser){
        return res.status(400).json( {message: "User already exists!"});
    }

    const hashedPassword = bcrypt.hashSync(password);

    const newMember = new Member({
        firstName,
        lastName,
        dateOfBirth,
        Address,
        mobileNumber,
        emailAddress,
        userName,
        password: hashedPassword
    });

    try {
        await newMember.save();
    }catch (error){
        console.log(error);
    }

    return res.status(201).json({ message: newMember}); 
});

router.route("/memberDetails").get(async(req,res) => {

    const memberId = req.id;

    let member; 
    try{
        member = await Member.findById(memberId, "-password");
    }catch(error){
        return new Error(error)
    }
    if (!member){
        res.status(404).json({message: "user not found"})
    }
    return res.status(200).json({member})
});


router.route("/login").post( async(req, res, next) =>{

    const { userName , password } = req.body;

    let existingUser;
    try{
        existingUser = await Member.findOne({userName: userName});
    }catch(error){
        return new Error(error);
    }

    if(!existingUser){
        return res.status(400).json({ message: "User not found please register or check login details"});
    }


    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invalid UserName or the password"})
    }

    const token = jwt.sign({id:existingUser._id}, secret_key,{
        expiresIn: "2h"
    });

    res.cookie(String(existingUser._id), token, {
        path: '/',
        expires: new Date(Date.now() + 1000 * 30),
        httpOnly: true,
        sameSite: 'lax'
    })

    return res.status(200).json({message:  "Successfully logged in.", member:existingUser, token});
});


router.route("/logout").post(async(req,res,next)=>{
    const cookies = req.headers.cookie;
    const token = cookies.split('=')[1].split(';')[0];
    console.log(cookies);
    
        
    if(!token){
        res.status(404).json({message:"No token found"})
    }
    jwt.verify(String(token),secret_key, (err, member) => {
        if(err){
            return res.status(400).json({message:"Invalid Token"});
        }
        res.clearCookie(member.id)
        //req.cookies[user.id]=" "
        console.log(member.id);
        req.id = member.id;
        return res.status(200).json({message:"successfully logout"});
       
    });
   
});

router.route("/member").get((req,res,next) => {
    
    const token = req.headers.authorization;
    console.log(token);
    
    if(!token){
        res.status(400).json({message: "No token found"});
    }
    jwt.verify(String(token),secret_key,(error, member) =>{
        if(error){
            res.status(400).json({message: "Invalid token"});
        }

        req.id = member.id;
        console.log(member.id);
    });
    next();
});

router.route("/member").get(async(req,res,next) => {
    const memberId = req.id; 
    
    await Member.findById(memberId, "-password").then((member) => {
        return res.status(200).json(member)
        }).catch((error) =>{
        return new Error(error)
    })
}); 


router.route("/update/:memberID").put(async (req,res) => {
    
    let memberId = req.params.memberID;

    const { firstName , lastName , dateOfBirth , Address , mobileNumber , emailAddress , userName , password } = req.body;

    const updateMember = {
        firstName,
        lastName,
        dateOfBirth,
        Address,
        mobileNumber,
        emailAddress,
        userName,
        password
    }

    const update = await Member.findByIdAndUpdate(memberId,updateMember).then(() => {
        res.status(200).send({status: "User ahs been updated successfully!!!"});
    }).catch((error) => {
        console.log(error);
        res.status(500).send({status: "Error occured when updating memeber!!"});
    })

});


router.route("/deleteProfile/:memberID").delete(async(req,res) => {
    
    let memberId = req.params.memberID;

    await Member.findByIdAndDelete(memberId).then(() => {
        res.status(200).send({status:"User has been deleted successfully!!!"});
    }).catch((error) => {
        console.log(error);
        res.status(500).send({status:"Error occured when deleting the memeber try again."});
    })
});

router.route("/getMemberList").get(async(req,res) => {
    
    await Member.find().then((members) => {
        res.json(members);
    }).catch((error) => {
        console.log(error);
        res.status(500).send({status: "error occoured when getting the details of members"});
    })
});

router.route("/memberDetails/:memberID").get(async(req,res) => {

    let memberId = req.params.memberID;

    const memeber = await Member.findById(memberId).then((member) => {
        res.status(200).send({member});
    }).catch((error) => {
        console.log(error);
        res.status(500).send({status: "Error occoured when getting the details od the customer"});
    })
});


router.route("/memberDetails").get(async(req,res) => {

    const memberId = req.id;

    let member; 
    try{
        member = await Member.findById(memberId, "-password");
    }catch(error){
        return new Error(error)
    }
    if (!member){
        res.status(404).json({message: "user not found"})
    }
    return res.status(200).json({member})
});

module.exports = router;
