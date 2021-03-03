// defining the required modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// setting up express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

// setting the view engine for ejs
app.set("view enginge", "ejs");

// handling the GET request
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// handling the post requests
app.post("/", (req, res) => {
    const error = err // TODO set up the error handling to be used in the ejs view to render the correct color and message for better user feedback!
    res.render("main", { status: error });
});

// setting up the  server
app.listen(process.env.PORT || "3000", () => {
    console.log("Server started on Port 3000");
})