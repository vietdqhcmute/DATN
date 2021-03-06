const express = require("express");
const router = express.Router();
const Candidate = require("./models/Candidate");
const Authentication = require("./models/Authentication");
const Recruiter = require("./models/Recruiter");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const RECRUITER_AVA_URL =
  "https://nodejs-server-image.s3.amazonaws.com/1558956195517";
const CANDIDATE_AVA_URL =
  "https://nodejs-server-image.s3.amazonaws.com/1558956291712";
const today = new Date();

//API sign up for administrator
router.post("/sign-up-admin", (req, res) => {
  hash = bcrypt.hashSync("admin", 10);
  const authenticationParams = {
    email: "admin@admin.com",
    password: hash,
    role: 0,
    active: true
  };
  const authentication = new Authentication(authenticationParams);
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
  const authenticationParams = {
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: hash,
    role: 1,
    active: true
  };
  const authentication = new Authentication(authenticationParams);
  authentication.save(function(err) {
    if (err) {
      res.status(500).json({
        message: "Email is being used try another one"
      });
      return;
    }
    const candidateParams = {
      _authentication: authenticationParams._id,
      full_name: req.body.name,
      display_name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      image_url: CANDIDATE_AVA_URL,
      created_at: today,
      updated_at: today
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
  const authenticationParams = {
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: hash,
    role: 2,
    active: true
  };
  const authentication = new Authentication(authenticationParams);
  authentication.save(function(err) {
    if (err) {
      res.status(500).json({
        message: "Email is being used try another one"
      });
      return;
    }
    const recruiterParams = {
      _authentication: authenticationParams._id,
      company_name: req.body.company_name,
      image_url: RECRUITER_AVA_URL,
      email: req.body.email,
      phone: req.body.phone,
      address: "",
      website: req.body.website,
      employees: "0",
      overview: "Adding some overview",
      city: req.body.city,
      production: "",
      day_at_work: "",
      slogan: "Add your new slogan!",
      created_at: today,
      updated_at: today
    };
    const recruiter = new Recruiter(recruiterParams);
    recruiter.save(function(error) {
      if (error) {
        res.status(500).json({
          message: "Some error has occured!"
        });
        return;
      }
      res.status(200).json({
        message: "Recruiter has been created!"
      });
    });
  });
});

//New API login
router.post("/login", (req, res, next) => {
  let fetchedUser = {
    email: String,
    role: Number
  };
  Authentication.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Email fault!"
        });
      }
      if (!user.active) {
        return res.status(401).json({
          message: "User is deactivated!"
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

// Deactivate user
router.put("/deactivate/:id", (req, res) => {
  Authentication.findByIdAndUpdate(
    req.params.id,
    {
      active: false
    },
    (err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).json(data);
      }
    }
  );
});
//Activate user
router.put("/activate/:id", (req, res) => {
  Authentication.findByIdAndUpdate(
    req.params.id,
    {
      active: true
    },
    (err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).json(data);
      }
    }
  );
});
module.exports = router;
