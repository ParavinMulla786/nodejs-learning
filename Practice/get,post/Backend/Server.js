const express = require('express');
const app = express();

const port = 8080;

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