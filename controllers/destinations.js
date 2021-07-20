import { Destination } from '../models/destination'

export {
  newDestination as new,
  create
}


function create(req, res) {
  // Needed to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format: "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  let birthDate = new Date(req.body.born)
  req.body.born = birthDate.toUTCString()
  Destination.create(req.body, function(err, performer) {
    res.redirect('/destination/new')
  })
}


function newDestination(req, res) {
  Destination.find({}, function(err, destinations) {
    res.render('destination/new', {
      title: 'Add Performer',
      destinations: destinations
    })
  })
}