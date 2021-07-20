import { Router } from 'express'
import * as destinationCtrl from '../controllers/destinations.js'

export {
  router
}

const router = Router()

// localhost:3000/performers/new
router.get('/new', destinationCtrl.new)

// localhost:3000/performers
router.post('/', destinationCtrl.create)