const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt"); // bcryptjs for prod

const router = express.Router();

const User = require("../models/user");



router.get("", (req, res, next) => {
  res.status(200).json({
    test: 'tests'
  })
});

router.post("/signup", (req, res, next) => {
  console.log(req.body)

  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: hash,
      isAdmin: false
    });
    user.save().then(result => {
      res.status(201).json({
        message: "User created..",
        result: result
      });
    }).catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      });
    });
  });
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    message: 'user logged in'
  })
});


module.exports = router;