import mongoose from 'mongoose'

export {
  Flight,
  Ticket
}
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seatNumber: {
      type: String,
      match: /[A-F][1-9]\d?/,
  },
  price: {
      type: Number,
      min: 0,
  },
})

const flightSchema = new Schema({
  Airline: String,
  Airport: String,
  FlightNo: Number,
  Departs: {type: Date, default: Date},
})



const Flight = mongoose.model('Flight', flightSchema)
const Ticket = mongoose.model('Ticket', ticketSchema)