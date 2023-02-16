const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("<h1>Hello There!!<\h1>")
});

app.listen(8080, () => {
    console.log("Listing on port 8080");
})