const mongoose = require("mongoose");

const dbConnect = () => {
    return mongoose.connect("mongodb+srv://choudharylokesh:lokeshdc@database.qj0iifu.mongodb.net/development")
}

module.exports = dbConnect;