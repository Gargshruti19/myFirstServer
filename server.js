//Server instantiate
const express = require("express");
const app = express();

//used to parse req.body in express  => PUT  or  POST
const bodyParser = require("body-parser");

//specifically parse json data and add  it to the req.body object
app.use(bodyParser.json());

//activate server on 3000 port
app.listen(3000, () => {
	console.log("Server Started at port number 3000");
});

//Routes
app.get("/", (req, res) => {
	res.send("Hello ji, How Are you ?");
});

app.post("/api/cars", (req, res) => {
	const { name, brand } = req.body;
	console.log(name, brand);
	res.send("Car submitted successfully");
});

//mongoose
const mongoose = require("mongoose");
mongoose
	.connect("mongodb://localhost:27017/myDatabase", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("connection successfull");
	})
	.catch((e) => {
		console.log("error ");
	});
