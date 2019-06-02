const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

//Create review
router.post("/review", (req, res) => {
  const review = new Review(req.body);
  review.save((err,review) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).send("Create review success!");
  });
});

//Get all review of company email
router.get("/reviews/:email", (req, res) => {
  Review.find({
      email: req.params.email
    },
    (error, data) => {
      if (error) {
        return console.log(error);
      } else {
        if (!data) {
          return res.status(404).json("Can not find anything");
        }
        return res.status(200).json(data);
      }
    }
  );
});

module.exports = router;
