const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

//Create review
router.post("/add/review", (req, res) => {
  const review = new Review(req.body);
  review.save((err,review) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).redirect("/review/"+review._id);
  });
});

//Get review by company_name
router.get("/review/:company_name", async (req, res) => {
  try {
    const review = await Review.findOne({company_name:req.params.company_name});
    res.status(200).json(review);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
