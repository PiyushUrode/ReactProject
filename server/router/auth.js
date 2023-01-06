const { response, application } = require('express');
const express = require('express');
const user = require('../model/userschema');
const router = express.Router();
const bcrypt = require('bcryptjs');

const users=require("../model/userschema");



router.get("/" , (req,res)=>{
    res.send("hello router world form the server")
});


router.post("/Register" , async(req,res)=>{
   const{name , email , phone , work , password , cpassword}=req.body;
   if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({error:"plz filled the property"});
   }

   try {   const userExist = await users.findOne({email:email});

   if (userExist) {
       return res.status(422).json({error:'email not exist'});
   }
       const user = new users({name,email,phone,work,password,cpassword});
   
   
      const userregister=  await user.save();
       
       if (userregister){
           res.status(201).json({message :"user register success"});
       }else{res.status(500).json({error:"failed to register"})}
   
    
   } catch (err) {
       console.log(err);  
   }
   

   //login set
   router.post('/login' ,async (req,res)=>{
  try {
    const{email,password}=req.body;
    if (!email || !password) {
        return res.status(400).json({error:"please filed the data"})
    }
    const userlogin = await user.findOne({email:email});

//const isMatch = await bcrypt.compare(password ,userlogin.password);
    //console.log(userlogin);

    if(!userlogin){
        res.status(400).json({error: "user error "})
    } else{
    res.json({message:"user  signin sucessfully"})
    }
    
  } catch (error) {
    console.log(err);
    
  }


   })

   router.get('./logout' ,  (req ,res)=>{
    console.log(`heelo logout `);
    
    res.status(200).send('user logout');
   })
      
   
});


module.exports = router;

