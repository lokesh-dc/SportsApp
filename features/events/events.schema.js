const mongoose = require("mongoose");


let eventsSchema = new mongoose.Schema({
    time : { type: "String", required : true}
})

let eventsModel = mongoose.model("event",eventsSchema);

module.exports = eventsModel;