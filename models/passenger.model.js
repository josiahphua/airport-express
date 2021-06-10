const mongoose = require("mongoose")
const Schema = mongoose.Schema

const passengerSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    dob: {type: String, required: true},
    
})

module.exports = mongoose.model("Passenger", passengerSchema)