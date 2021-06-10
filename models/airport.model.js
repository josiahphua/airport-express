const mongoose = require("mongoose")
const Schema = mongoose.Schema

const airportSchema = new Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    terminal: [
        {
        type: Schema.Types.ObjectId,
        ref: "Terminal"
        }
    ],
    opened: {type: String, required: true}
})

module.exports = mongoose.model("Airport", airportSchema)