const mongoose = require("mongoose");


let eventsSchema = new mongoose.Schema({
    time : { type: String, required : true},
    limit : {type: Number, default: 1},
    date : {type: Date}
})

let eventsModel = mongoose.model("event",eventsSchema);

module.exports = eventsModel;