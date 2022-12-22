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
    let {createdBy,title, start,end, description, limit, joined  } = req.body;
    limit = +limit;
    try{
        await eventsModel.create({createdBy,title, start,end, limit, description, joined});
        res.send("Event successfully created");
    }catch(e){
        res.status(500).send(e.message);
    }
})

app.get("/:id", async(req,res)=>{
    let {id} = req.params;
    try{
        let eventDetails = await eventsModel.findById(id).populate({path:'createdBy'}).populate({
            path : "waitlisted",
            populate : [
                { path : "user" }
            ]
        })
        res.send(eventDetails)
    }catch(e){
        res.status(500).send(e.message);
    }
})

app.patch("/:id", async (req,res)=>{
    let {id} = req.params;
    let {userId} = req.body;
    try{
        let event = await eventsModel.findById(id);
        let waitlist = event.waitlisted;
        waitlist.push({user: userId})
        await eventsModel.findByIdAndUpdate(id, {waitlisted: waitlist});
        res.send("updated")
    }catch(e){
        res.status(500).send(e.message);
    }
})

module.exports = app;