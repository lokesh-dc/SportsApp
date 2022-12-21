const express = require("express");
const eventsModel = require("./events.schema");


const app = express.Router();

app.get("/", async (req, res)=>{
    try{
        let allEvents = await eventsModel.find();
        res.send(allEvents);
    }catch(e){
        res.status(500).send(e.message);
    }
})


app.post("/", async (req, res)=>{
    let {title, date, description, limit, timings, joined  } = req.body;
    try{
        await eventsModel.create({title, date, limit, description, timings, joined});
        res.send("Event successfully created");
    }catch(e){
        res.status(500).send(e.message);
    }
})


module.exports = app;