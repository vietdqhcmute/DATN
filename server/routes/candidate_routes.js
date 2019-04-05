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
    const candidate = await Candidate.findOne({ email: req.params.email });
    res.status(200).json(candidate);
  } catch (err) {
    res.status(404).send(err);
  }
});

//API update user by ID
router.put("/update/candidate/:id", async (req, res) => {
  try {
    await Candidate.findByIdAndUpdate(
      {
        _id: req.params.id
      },
      req.body,
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
      }
    );
    res.status(200).redirect("/candidate/" + req.params.id);
  } catch (err) {
    res.status(500).json({
      message: "Update failed!"
    });
  }
});

module.exports = router;
