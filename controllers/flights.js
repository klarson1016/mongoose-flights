import { Flight } from '../models/flight.js'
import { Destination } from '../models/destination.js'
export {
  newFlight as new,
  create, 
  index,
  deleteFlight as delete,
  show,
  createTicket
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, flight) {
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {
      flights: flights,
      err
    })
  })
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights/')
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function ( err, flight) {
    flight.Tickets.push(req.body)
    flight.save(function(err){
      if (err) console.log("error")
    res.redirect('/flights/' + flight.id)
    })
  })
} 

function newFlight(req, res) {
  res.render('flights/new')
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', { 
      title: 'Flight Details', 
      flight: flight,
    })
  })
}

