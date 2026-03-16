const mongoose = require("mongoose")

const TeacherSchema = new mongoose.Schema({

nom:String,
prenom:String,
email:String,
telephone:String,
specialite:String,
experience:Number,
cv:String,

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Teacher",TeacherSchema)