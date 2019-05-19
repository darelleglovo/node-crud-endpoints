const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
// nCxWTZIt7QZRtVMy

mongoose
  .connect(
    "mongodb+srv://yah:nCxWTZIt7QZRtVMy@node-crud-khleq.mongodb.net/test?retryWrites=true"
  )
  .then(() => {
    console.log("Connected to database..");
  })
  .catch(() => {
    console.log("Connection failed..");
  });


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


app.use("/api/user", userRoutes);

module.exports = app;