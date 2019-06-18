const express = require("express");
const router = express.Router();
const checkAuth = require("../check-auth");
const Candidate = require("../models/Candidate");
const Recruiter = require("../models/Recruiter");
const Authentication = require("../models/Authentication");
// const NewFeed = require('../models/NewFeed');

//Get candidate and status
router.get("/candidates/status", async (req, res) => {
  try {
    const candidates = await Candidate.find().populate(
      "_authentication",
      "active"
    );
    res.send(candidates);
  } catch (err) {
    console.log(err);
  }
});

//Get candidate and status
router.get("/recruiters/status", async (req, res) => {
  try {
    const recruiters = await Recruiter.find().populate(
      "_authentication",
      "active"
    );
    res.send(recruiters);
  } catch (err) {
    console.log(err);
  }
});

router.put("/deactivate/:auth_id", (req, res) => {
  Authentication.findByIdAndUpdate(
    { _id: req.params.auth_id },
    { active: false },
    (err, resp) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send("Use has been deactivated!");
    }
  );
});
router.put("/activate/:auth_id", async (req, res) => {
  Authentication.findByIdAndUpdate(
    { _id: req.params.auth_id },
    { active: true },
    (err, resp) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send("Use has been activated!");
    }
  );
});

module.exports = router;
