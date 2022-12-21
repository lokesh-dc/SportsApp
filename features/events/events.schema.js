const mongoose = require("mongoose");


let eventsSchema = new mongoose.Schema({
    title : { type: String, required : true},
    description : {type: String},
    limit : {type: Number, default: 1},
    start : {type: String},
    end : {type: String},
    joined : {type: Array},
    createdBy : {type: String}
})

let eventsModel = mongoose.model("event",eventsSchema);

module.exports = eventsModel;