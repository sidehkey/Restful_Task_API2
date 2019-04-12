var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("express-flash");
var path = require("path");
mongoose.Promise = global.Promise;

app.use(flash());
app.use(express.static(path.join(__dirname, "./static")));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json()); 
app.use(session({
    secret: "people",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs")

require('./server/config/routes.js')(app)
require('./server/config/mongoose.js')

app.listen(8000, function(){
    console.log("Listening on port: 8000");
})
