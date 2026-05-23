const express = require('express');

const app = express();

const port = 5000;


// Static Folder
app.use(express.static('public'));


// REMOVE THIS
// app.get("/", (req, res) => {
//     res.send("We Are Learning Node");
// });


app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});