import { Destination } from '../models/destination'

export {
  newDestination as new,
  create
}


function create(req, res) {
  Destination.create(req.body)
  .then(result => res.redirect("/destinations/new"))
  .catch(err => console.log(err))
}





function newDestination(req, res) {
  Destination.find({}, function(err, destinations) {
    res.render('destinations/new', {
      title: 'New Destination',
      destinations: destinations
    })
  })
  .catch(err => console.log(err))
}