const express = require("express");
const eventsModel = require("./events.schema");


const app = express.Router();

app.get("/", async (req, res)=>{
    const {sort, city} = req.query;
    try{
        let allEvents;
        if(city===""){
            allEvents = await eventsModel.find().sort({startDate: sort});
        }
        else
            allEvents = await eventsModel.find({city}).sort({startDate: sort});
        
        res.send(allEvents);
    }catch(e){
        res.status(500).send(e.message);
    }
})


app.post("/", async (req, res)=>{
    let {createdBy,title,startTime,startDate ,endDate ,endTime, description, limit, joined, city  } = req.body;
    limit = +limit;
    try{
        await eventsModel.create({createdBy,title, startTime,startDate ,endDate ,endTime, limit, description, joined, city});
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