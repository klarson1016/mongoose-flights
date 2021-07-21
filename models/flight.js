import mongoose from 'mongoose'

export {
  Flight,
  
}
const Schema = mongoose.Schema

const ticketSchema = new Schema( {
  Price: Number,
  Seat: {type: String, match: /[A-F][1-9]\d?/}
})

const flightSchema = new Schema({
  Airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },  
  Airport: {
    type: String,
    enum: ["DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },
  FlightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  Departs: {
    type: Date, 
    default:function (){
      let date = new Date()
      date.setFullYear(date.getFullYear() + 1)
      return date
    },
  },
  Tickets: [ticketSchema],
  destinations: [{
    type: Schema.Types.ObjectId,
    ref: "Destination"
  }]
})



const Flight = mongoose.model('Flight', flightSchema)
