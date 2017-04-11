const bodyParser= require ("body-parser");
const cheerio = require("cheerio");
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const request = require("request");


//Call Dependencies
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Initialize handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
require('./routes/cheerio.js')(app);
// require('./routes/db_routes.js')(app);
// require('./routes/comment_routes.js')(app);

app.get('/', function(req, res){
	res.render('index');
})

// //Connect to DB
// mongoose.connect(********NEED DB********);

// // Save mongoose connection to db
// var db = mongoose.connection;

// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });

// // Once connection "open" to mongoose, tell console we're in
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });


// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});