const express = require('express');
const router = express.Router();
const Article = require("../models/Article");
const Recruiter = require("../models/Recruiter");

//Search Articles by company email
router.get("/articles", (req,res)=>{
  Article.find({$text:{$search: req.query.key}}).exec((err, docs)=>{
    if (err){
      res.status(404).send(err);
    }
    res.status(200).json(docs);
  })
})

//Search Company by name
router.get("/companies", (req,res)=>{
  Recruiter.find({$text:{$search: req.query.key}}).exec((err, docs)=>{
    if (err){
      res.status(404).send(err);
    }
    res.status(200).json(docs);
  })
})
module.exports = router;
