

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

module.exports = app;