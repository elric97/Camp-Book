var mongoose = require("mongoose");

//schema set up
var bookingSchema = new mongoose.Schema(
    {
       author:
       {
           id: 
           {
               type: mongoose.Schema.Types.ObjectId,
               ref: "User"
           },
           username: String,
           phonenumber: String
       },
       date:
       {
           type: Date,
           default: Date.now
       },
       camp:
       {
           id: 
           {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User" //refers to the model
           }
       }
    });
    
module.exports = mongoose.model("Booking",bookingSchema);