const mongoose = require("mongoose")
const Schema = mongoose.Schema

const terminalSchema = new Schema({
    name: {type: String, required: true},
    flights: [{
        type: Schema.Types.ObjectId,
        ref: "Flight"
    }],
    capacity: {type: String, required: true}
})

module.exports = mongoose.model("Terminal", terminalSchema)