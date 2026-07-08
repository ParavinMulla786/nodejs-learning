const express = require("express");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
    res.send("🚀 My Note API is running");
});

// get Note
app.get("/notes", (req, res) => {
  
    res.status(200).json({
        message: "Notes fetched successfully",
        notes,
    });
});

app.post("/notes", (req, res) => {
    

    notes.push(req.body);

    res.status(201).json({
        message: "Note created successfully",
        note: req.body,
    });
});

// delete / notes/:index';


app.delete('/notes/:index', (req,res)=>{
   const index = req.params.index
 delete notes [index]
 res.status(200).json({
    message:"note deleted successfully"
 })

})


123456

//update

app.patch('/notes/:index', (req,res)=>{
 const index = req.params.index
 const description = req.body.description
   notes[index].description = description
   res.status(200).json({
    msg:"note updated successfully"
   })
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
   
});