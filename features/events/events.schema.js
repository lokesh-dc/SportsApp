const mongoose = require("mongoose");


let eventsSchema = new mongoose.Schema({
    title : { type: String, required : true},
    description : {type: String},
    limit : {type: Number, default: 1},
    start : {type: Date},
    end : {type: Date},
    joined : {type: Array}
})

let eventsModel = mongoose.model("event",eventsSchema);

module.exports = eventsModel;