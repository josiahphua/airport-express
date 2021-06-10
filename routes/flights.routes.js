const router = require('express').Router()
const FlightModel = require('../models/flight.model')

router.get('/create', async (req, res)=>{
    try{
        let flights = await FlightModel.find()
        res.render('flights/new', { flights })

    }catch(e){
        console.log(e);
    }
})


router.post('/create', async (req, res)=>{
    try{
        let flight = new FlightModel(req.body)
        await flight.save()
        res.redirect('/flights/create')

    }catch(e){
        console.log(e);
    }
})

module.exports = router