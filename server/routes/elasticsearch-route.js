const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");
const Article = require("../models/Article");
const Candidate = require("../models/Candidate");
//search company by email
router.get("/recruiter/:email", (req, res) => {
  Recruiter.search(
    { query_string: { query: req.params.email } },
    { hydrate: true },
    (err, results) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      const hitResults = results.hits.hits.filter(element => {
        return element != null;
      });
      if (hitResults.length === 0) {
        return res.status(404).json({ message: "Nothing to be found!" });
      }
      return res.status(200).json({ results: hitResults });
    }
  );
});

//search candidate by email
router.get("/candidate/:email", (req, res) => {
  Candidate.search(
    { query_string: { query: req.params.email } },
    { hydrate: true },
    (err, results) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      const hitResults = results.hits.hits.filter(element => {
        return element != null;
      });
      if (hitResults.length === 0) {
        return res.status(404).json({ message: "Nothing to be found!" });
      }
      return res.status(200).json({ results: hitResults });
    }
  );
});

//Search article by tag
router.get("/article/:tag", (req, res) => {
  Article.search(
    { query_string: { query: req.params.tag } },
    { hydrate: true },
    (err, results) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      const hitResults = results.hits.hits.filter(element => {
        return element != null;
      });
      if (hitResults.length === 0) {
        return res.status(404).json({ message: "Nothing to be found!" });
      }
      return res.status(200).json({ results: hitResults });
    }
  );
});
module.exports = router;
