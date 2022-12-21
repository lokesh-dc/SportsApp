const express = require("express");
const eventsModel = require("./events.schema");


const app = express.Router();

app.get("/", async (req, res)=>{
    try{
        let allEvents = await eventsModel.find().sort({start: -1});
        res.send(allEvents);
    }catch(e){
        res.status(500).send(e.message);
    }
})


app.post("/", async (req, res)=>{
    let {title, start,end, description, limit, joined  } = req.body;
    try{
        await eventsModel.create({title, start,end, limit, description, joined});
        res.send("Event successfully created");
    }catch(e){
        res.status(500).send(e.message);
    }
})

app.get("/:id", async(req,res)=>{
    let {id} = req.params;
    console.log(id)
    try{
        let eventDetails = await eventsModel.findById(id);
        res.send(eventDetails)
    }catch(e){
        res.status(500).send(e.message);
    }
})

module.exports = app;