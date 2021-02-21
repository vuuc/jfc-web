// defining the required modules
const express = require("express");
const bodyParser = require("body-parser");

// setting up express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

// handling the GET request
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// handling the post requests
app.post("/", (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + "/html/emailSuccess.html");
});

// setting up the  server
app.listen(process.env.PORT || "3000", () => {
    console.log("Server started on Port 3000");
})