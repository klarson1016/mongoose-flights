import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */

router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.post("/:id/", flightsCtrl.delete)
//router.post("/:id/destinations", flightsCtrl.addToDestinations)
router.get('/:id', flightsCtrl.show);
router.post('/:id/tickets', flightsCtrl.createTicket);

export {
  router
}
