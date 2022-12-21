

const express = require("express");

const authModel = require("./auth.schema");

const app = express.Router();

app.get("/", async (req, res)=>{
    try{
        const allUsers = await authModel.find();
        res.send(allUsers);
    }catch(e){
        res.status(500).send(e.message);
    }
})

app.post("/signup", async(req, res)=>{
    const {userName, email, password } = req.body;
    try{    
        await authModel.create({userName, email, password});
        res.send({status: true, message: "User successfully created"});
    }catch(e){
        res.status(500).send(e.message);
    }
})

app.post("/login", async(req, res)=>{
    const { email, password } = req.body;
    try{    
        const isUser = await authModel.findOne({ email, password});
        if(!isUser){
            res.status(401).send({status: false, message: "Wrong Credentials."});
            return;
        }
        res.send({status: true, userId: isUser._id});
    }catch(e){
        res.status(500).send(e.message);
    }
})

module.exports = app;