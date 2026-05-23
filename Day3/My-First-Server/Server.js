const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("We Are Learning Node");
});

app.get("/B82", (req, res) => {
    res.status(200).send("This is our Server");
});

app.post("/Contact", (req, res) => {
    console.log(req.body);

    let name = req.body.Name;
    name = name.toUpperCase();

    res.status(200).send({
        msg: "Successfully Submitted",
        success: true,
        user: name
    });
});


// Student Object
let student;

// POST API
app.post('/student-info', (req, res) => {

    console.log(req.body);

    student = {
        name: req.body.name,
        ID: req.body.id,
        Course: req.body.course
    };

    res.status(200).json({
        msg: "Got Student Information",
        success: true
    });
});


// GET API
app.get('/getstudent', (req, res) => {

    res.status(200).send({
        success: true,
        stu: student
    });

});

app.listen(port, () => {
    console.log("Server Started on port " + port);
});