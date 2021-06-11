var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://new-user:new-user123@cluster0.fhcmp.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => console.log("connected to db")
);
//import routes

var authRoute = require("./routes/auth");

//connect to db

//Route middleware
app.use("/api/user", authRoute);

//middleware
app.use(express.json());

app.listen(3020, () => console.log("server is running"));
