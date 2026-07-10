const express = require('express');
const connectDB = require('./db/db');
const nodeModel = require("./models/notemodel");
 connectDB()
port = 3000;



const app = express();
app.use(express.json());


app.post("/notes",(async req, res)=>{
    const data = req.body
    await nodeModel.create({
        title:data.title,
        description:data.description
    })
})


app.listen(port,()=>{
  console.log(`server running on ${port}`);
})