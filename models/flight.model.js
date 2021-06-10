const mongoose = require("mongoose")
const Schema = mongoose.Schema

const flightSchema = new Schema({
    name: {type: String, required: true},
    from: {type: String, required: true},
    to: {type: String, required: true},
    airline: {type: String, required: true},
    // passenger: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Passenger"
    // }
})

module.exports = mongoose.model("Flight", flightSchema)