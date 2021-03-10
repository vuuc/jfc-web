// defining the required modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin-jesper:test123@cluster0.ggxae.mongodb.net/jfcwebDB", { useNewUrlParser: true, useUnifiedTopology: true  })
const db = mongoose.connection;

const messageSchema = { 
	header: String,
	email: {  
		type: String,
		required: true
	},
	content: String
}

const Message = mongoose.model("Message", messageSchema)

const testMessage = new Message ({  
	header: "Moin Meister",
	email: "jesper@christ.de",
	content: "Moininger Meister, wir wollen dich haben du süße Schnecke!"
})

// setting up express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

// setting the view engine for ejs
app.set("view enginge", "ejs");

// handling the GET request
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/inbox", (req, res) => {  
	Message.find({}, function(err, foundMessages){  
		if (foundMessages === 0) {
			testMessage.save();
			res.redirect("/inbox");
		} else {  
			res.render("inbox", { messages: foundMessages });
		}
	})
})

app.get("/inbox/:mail", (req, res) => {  
	Message.findOne({ _id: req.params._id }, function(err, foundMessage){  
		res.render("mailViewer", { mail: foundMessage });
	})
})

// handling the post requests
app.post("/", (req, res) => {
    const error = err // TODO set up the error handling to be used in the ejs view to render the correct color and message for better user feedback!
    res.render("main", { status: error });
});

// setting up the  server
app.listen(process.env.PORT || "3000", () => {
    console.log("Server started on Port 3000");
})