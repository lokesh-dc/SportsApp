const mongoose = require("mongoose");

const joinedUserSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
  }
})

let eventsSchema = new mongoose.Schema({
    title : { type: String, required : true},
    description : {type: String},
    limit : {type: Number, default: 1},
    start : {type: String},
    end : {type: String},
    joined : {type: [joinedUserSchema]},
    waitlisted : {type : [joinedUserSchema]},
    createdBy : {type: String}
})

let eventsModel = mongoose.model("event",eventsSchema);

module.exports = eventsModel;