const router = require('express').Router()
const TerminalModel = require('../models/terminal.model')
const FlightModel = require('../models/flight.model')

router.get("/create", async (req,res)=>{
    try{
        let terminals = await TerminalModel.find()
        let flights = await FlightModel.find()
        res.render('terminals/new', { terminals, flights })

    }catch(e){
        console.log("first   " + e);
    }   
})

router.post("/create", async (req,res)=>{
    try{
        let terminal = new TerminalModel(req.body)
        await terminal.save()
        await FlightModel.findByIdAndUpdate(req.body.flights, {$push: { terminals: terminal._id }})
        res.redirect('/terminals/create')
    }catch(e){
        console.log("second      " + e);
    }
})


module.exports = router