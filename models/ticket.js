import mongoose from 'mongoose'

export {
  Ticket
}
const Schema = mongoose.Schema

const ticketSchema = new Schema( {
  Price: Number,
  Seat: String,
  Ticket: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]

})

const Ticket = mongoose.model('Ticket', ticketSchema)