const mongoose = require("mongoose");


let eventsSchema = new mongoose.Schema({
    time : { type: String, required : true},
    description : {type: String},
    limit : {type: Number, default: 1},
    date : {type: Date},
    timings : {type: Number},
    joined : {type: Array}
})

let eventsModel = mongoose.model("event",eventsSchema);

module.exports = eventsModel;