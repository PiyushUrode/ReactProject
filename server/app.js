// middleware
const mongoose = require('mongoose');
const express = require("express");
const router = require('./router/auth');
const app = express();

//const DB = `mongodb+srv://Piyushurode:Piyushurode@cluster0.nxold4d.mongodb.net/test`
// we link the router file
app.use(express.json());
require('./db/conn');
//onst user = require('./model/userschema');
app.use(require('./router/auth'));


//midlleware
const middleware = (req,res, next)=>{
    console.log("hello middleware form this side");
       next();
}

router.get("/About" ,middleware ,(req,res)=>{
    res.send("hello about form the server")
});

router.get("/Contact" , middleware ,(req,res)=>{
    res.send("hello contact form the server")
});

router.get("/Service" , middleware ,(req,res)=>{
    res.send("hello service form the server")
});

router.get("/Login" ,middleware , (req,res)=>{
    res.send("hello login form the server")
});

router.get("/Register" , (req,res)=>{
    res.send("hello register form the server")
});





//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.listen(3000 , ()=>{
    console.log(`server is running`)
});