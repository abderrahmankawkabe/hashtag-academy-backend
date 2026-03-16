const mongoose = require("mongoose")

const ReservationSchema = new mongoose.Schema({

nom:String,
prenom:String,
email:String,
telephone:String,
ville:String,
programme:String,

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Reservation",ReservationSchema)