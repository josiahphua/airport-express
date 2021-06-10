const router = require('express').Router()
const AirportModel = require("../models/airport.model")
const TerminalModel = require("../models/terminal.model")
const FlightModel = require("../models/flight.model")

router.get('/', async (req, res)=>{
    try{
        let search ={}
        if(req.query.IDK){
            search = {country: new RegExp(req.query.IDK, "i")}
        }

        let airports = await AirportModel.find(search)
                        .populate({
                            path: "terminal",
                            populate: [{
                                path: "flights"
                            }]
                        })
        res.render('airports/index', { airports } )

    }catch(e){
        console.log(e);
    }
})


router.get('/create', async (req, res)=>{
    try{
        let flights = await FlightModel.find()
        let terminals = await TerminalModel.find()
        res.render('airports/new', { flights, terminals })
    }catch(e){

    }
})
router.post('/create', async (req, res)=>{
    try{
        let airport = new AirportModel(req.body)
        await airport.save()
        await TerminalModel.findByIdAndUpdate(req.body.terminal, {$push: { airports: airport._id}})
        res.redirect('/')
    }catch(e){

    }
})

module.exports = router
