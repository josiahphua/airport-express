const express = require('express')
const expressEJSLayouts = require('express-ejs-layouts')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.DB, {
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    console.log("mongodb running")
})

////middle where?
app.use(express.urlencoded({ extended:true }))
app.use(express.static('node_modules'))
app.use(expressEJSLayouts)
app.set('view engine', 'ejs')
////

app.use('/', require('./routes/airports'))
app.use('/flights', require('./routes/flights.routes'))
app.use('/terminals', require('./routes/terminal.routes'))




app.listen(process.env.PORT, ()=> console.log(`running on ${process.env.PORT}`))