const express = require("express");
const router = express.Router();
const Candidate = require("../models/Candidate");

//Create candidate
router.post("/add/candidate", (req, res) => {
  const candidate = new Candidate(req.body);
  candidate.save((err, candidate) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).redirect("/candidate/" + candidate._id);
  });
});

//Get candidate by ID
router.get("/candidate/:id", async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    res.status(200).json(candidate);
  } catch (err) {
    res.status(404).send(err);
  }
});

//Get candidate by email
router.get("/candidate/email/:email", async (req, res) => {
  try {
    const candidate = await Candidate.findOne({
      email: req.params.email
    });
    res.status(200).json(candidate);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Get all candidate
router.get("/candidates", async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.send(candidates);
  } catch (err) {
    console.log(err);
  }
});

//API update user by ID
router.put("/update/candidate/:id", (req, res) => {
  Candidate.findByIdAndUpdate(
    {
      _id: req.params.id
    },
    req.body,
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true
    },
    (err, data) => {
      if (err) {
        return res.status(500).send(err);
      }
      console.log(data);
      return res.status(200).send("Update profile success!");
    }
  );
});

//Apply article in candidate info
router.put("/candidate/apply", async (req, res) => {
  const query = await Candidate.findById(req.body.candidate_id);
  let applies = query._applied;
  console.log(applies);
  if (applies.indexOf(req.body.article_id) !== -1) {
    console.log("You've already applied for this job");
    return res.status(302).send("You've already applied for this job");
  } else {
    applies.push(req.body.article_id);
    query.save((err, callback) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(callback);
    });
  }
});

// Get all articles user has applied
router.get("/candidate/applies/:id", async (req, res) => {
  const query = await Candidate.findById(req.params.id).populate("_applied");
  const applies = query._applied;
  return res.status(200).json(applies.reverse());
});

module.exports = router;
