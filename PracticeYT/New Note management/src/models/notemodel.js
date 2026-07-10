const mongoose = require('mongoose');



const noteSchema = new mongoose.Schema({
    
        title:String,
        description:String,
    
})


const noteModel = mongoose.model("note", noteSchema)


// model crete karte hai kyuki hami database mai operations erform karne ke liye


module.exports = noteModel