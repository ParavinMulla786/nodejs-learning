const mongoose = require('mongoose');


async function connectDB(){
    await mongoose.connect("mongodb+srv://paravinmulla2004_db_user:Paravin%40786@ytcompletebackend.x8clh9h.mongodb.net/notesDB?retryWrites=true&w=majority&appName=ytcompletebackend")
    console.log("connected to DB");
}

module.exports = connectDB