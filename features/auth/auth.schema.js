const mongoose = require("mongoose");


let authSchema = new mongoose.Schema({
    userName : { type: String},
    password : {type: String},
    email : {type: String}
})

let authModel = mongoose.model("event",authSchema);

module.exports = authModel;