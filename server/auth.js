const express = require("express");
const router = express.Router();
const Candidate = require("./models/Candidate");
const Authentication = require("./models/Authentication");
const Recruiter = require("./models/Recruiter");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//API sign up for administrator
router.post("/sign-up-admin", (req, res) => {
  hash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hash;
  let authenticationParams = {
    email: req.body.email,
    password: hash,
    role: 0
  };
  let authentication = new Authentication(authenticationParams);
  authentication.save(function(err) {
    if (err) {
      res.status(500).json({
        message: "Email is being used try another one"
      });
      return;
    }
    res.status(201).json({
      message: "New admin has been born!"
    });
  });
});

// API sign up for candidate
router.post("/sign-up", (req, res) => {
  hash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hash;
  let authenticationParams = {
    email: req.body.email,
    password: hash,
    role: 1
  };
  let authentication = new Authentication(authenticationParams);
  authentication.save(function(err) {
    if (err) {
      res.status(500).json({
        message: "Email is being used try another one"
      });
      return;
    }
    let candidateParams = {
      full_name: req.body.name,
      display_name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      image_url: ""
    };
    candidate = new Candidate(candidateParams);
    candidate.save(function(error) {
      if (error) {
        res.status(500).json({
          message: "Some error has occured!"
        });
        return;
      }
      res.status(201).json({
        message: "Candidate has been created!"
      });
    });
  });
});

// API sign up for recruiter
router.post("/recruiter/sign-up", (req, res) => {
  hash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hash;
  let authenticationParams = {
    email: req.body.email,
    password: hash,
    role: 2
  };
  let authentication = new Authentication(authenticationParams);
  authentication.save(function(err) {
    if (err) {
      res.status(500).json({
        message: "Email is being used try another one"
      });
      return;
    }
    let recruiterParams = {
      company_name: req.body.company_name,
      image_url: "",
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      website: req.body.website,
      employees: 0,
      overview: "Adding some overview",
      recruit_news: [],
      candidates_follow: []
    };
    recruiter = new Recruiter(recruiterParams);
    recruiter.save(function(error) {
      if (error) {
        res.status(500).json({
          message: "Some error has occured!"
        });
        return;
      }
      res.status(201).json({
        message: "Recruiter has been created!"
      });
    });
  });
});

//New API login candidate
router.post("/login", (req, res, next) => {
  let fetchedUser={email:String, role:Number};
  Authentication.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Email fault!"
        });
      }
      fetchedUser.email = user.email;
      fetchedUser.role = user.role;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Check your password"
        });
      }
      const token = jwt.sign(
        {
          email: fetchedUser.email,
          userId: fetchedUser._id
        },
        "secret_that_should_be_longer",
        {
          expiresIn: "1h"
        }
      );
      res.status(200).json({
        token: token,
        fetcheddata: fetchedUser
      });
    });
});

module.exports = router;
