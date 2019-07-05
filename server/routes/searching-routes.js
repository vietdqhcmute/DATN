const express = require("express");
const router = express.Router();
const Article = require("../models/Article");
const Recruiter = require("../models/Recruiter");

//Search Articles by company email
router.get("/articles", (req, res) => {
  if (req.query.key === "") {
    Article.find({})
      .sort({ created_at: -1 })
      .limit(10)
      .exec(function(err, articles) {
        if (err) {
          return res.status(500).json(err);
        }
        res.status(200).send(articles);
      });
  } else {
    Article.find({ $text: { $search: req.query.key } }).exec((err, docs) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).json(docs);
    });
  }
});

//Search Company by name
router.get("/companies", (req, res) => {
  if (req.query.key === "") {
    Recruiter.find({})
      .sort({ created_at: -1 })
      .limit(10)
      .exec(function(err, articles) {
        if (err) {
          return res.status(500).json(err);
        }
        res.status(200).send(articles);
      });
  } else {
    Recruiter.find({ $text: { $search: req.query.key } }).exec((err, docs) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).json(docs);
    });
  }
});
module.exports = router;
