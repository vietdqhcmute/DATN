const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");

const today = new Date;

//Getting by ID
router.get("/recruiter/:id", async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);
    res.status(200).json(recruiter);
  } catch (err) {
    res.status(404).send(err);
  }
});
// Get all recruiter
router.get("/recruiters", async(req, res) => {
  try{
    const recruiters = await Recruiter.find();
    res.send(recruiters);
  }catch(err){
    console.log(err);
  }
});
//Getting recruiter by email
router.get("/recruiter/email/:email", async (req, res) => {
  try {
    const recruiter = await Recruiter.findOne({
      email: req.params.email
    });
    res.status(200).json(recruiter);
  } catch (err) {
    res.status(404).send(err);
  }
});
//Update recruiter by ID
router.put("/update/recruiter/:id", async (req, res) => {
  try {
    await Recruiter.findByIdAndUpdate({
        _id: req.params.id
      },
      req.body, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
        strict: false
      }
    );
    res.status(200).redirect("/recruiter/" + req.params.id);
  } catch (err) {
    res.status(500).json({
      message: "Update failed!"
    });
  }
});

module.exports = router;
