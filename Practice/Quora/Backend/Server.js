const express = require('express');
const app = express();

const port = 8080;


const path = require('path');

app.use(express.urlencoded({extended:true}));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname,"public")));
app.get('/register', (req, res) => {
    let { username, password } = req.query;
    res.send(`GET Response. Welcome ${username}!`);
});

app.post('/register', (req, res) => {
    res.send("POST Response");
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});