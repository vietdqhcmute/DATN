const express = require("express");
const router = express.Router();
const Tag = require("../models/Tag");

//Adding tag
router.post("/tag", (req, res) => {
  //Check if tag has already exist
  Tag.findOne({ content: req.body.content }, (err, data) => {
    if (!data) {
      const tag = new Tag(req.body);
      tag.save((err, data) => {
        if (err) {
          res.status(500);
          return console.log(err);
        }
        return res.status(200).send(data);
      });
    } else {
      return res.status(401).send("Tag duplicate");
    }
  });
});
//Getting by tag by name
router.get("/tag/:content", async (req, res) => {
  try {
    if (req.params.conten === "") {
      return;
    }
    const tag = await Tag.findOne({ content: req.params.content });
    res.status(200).json(tag);
  } catch (err) {
    res.status(404).send(err);
  }
});
//Getting all tags
router.get("/tags", async (req, res) => {
  try {
    const tag = await Tag.find().sort("content");
    res.status(200).json(tag);
  } catch (err) {
    res.status(404).send(err);
  }
});

//Delete tag
router.delete("/tag", (req, res) => {
  Tag.findOneAndRemove({ content: req.body.content }, (err, callback) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      if (!callback) {
        return res.status(404).send("Doesn't exist!");
      }
      return res.status(200).json("Delete successfully!");
    }
  });
});

module.exports = router;
