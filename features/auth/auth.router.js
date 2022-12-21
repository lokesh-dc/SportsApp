

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

app.post("/", async(req, res)=>{
    const {userName, email, password } = req.body;
    try{    
        await authModel.create({userName, email, password});
        res.send({status: true, message: "User successfully created"});
    }catch(e){
        res.status(500).send(e.message);
    }
})

module.exports = app;