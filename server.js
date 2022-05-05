const connectToMongo=require('./db')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Creating Port
const server = app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});


process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down server due to issue");
  server.close(() => {
    process.exit(1);
  });
});

app.use(express.json());
app.get("/",function(req,res){
    res.send("Hello world")
})

// Creating connection with mongoose server


connectToMongo();
