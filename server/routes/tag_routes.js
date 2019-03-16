const express = require("express");
const router = express.Router();
const Tag = require("../models/Tag");

//Adding tag
router.post("/add/tag", (req, res) => {
  //Check if tag has already exist
  Tag.findOne({tag_name: req.body.tag_name},(err,data)=>{
    if (!data){
      const tag = new Tag(req.body);
      tag.save((err,data) => {
        if (err) {
          res.status(500);
          return console.log(err);      
        }
        res.status(200).send(data);
      });
    }
    return res.status(500);
  })
});
//Getting by tag by name
router.get("/tag/:tag_name", async (req, res) => {
  try {
    const tag = await Tag.findOne({tag_name: req.params.tag_name});
    res.status(200).json(tag);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
