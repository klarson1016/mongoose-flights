import { Flight } from '../models/flight.js'

export {
  newFlight as new,
  create, 
  index,
  deleteFlight as delete
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
    res.redirect('/flights')
  })
}
function newFlight(req, res) {
  res.render('flights/new')
}