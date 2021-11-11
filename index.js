const express = require('express');
const app = express();
const importData = require('./db.json');
let port = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

app.get("/doctors", (req, res) => {
    res.send(importData);
});

app.listen(port, ()=> {
    console.log(`listening on port http://localhost:${port}`)
});