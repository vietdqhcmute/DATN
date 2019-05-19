const express = require('express');
const router = express.Router();
const Article = require("../models/Article");


//Search company in Aticles
router.post("/articles", (req,res)=>{

  Article.find({$text:{$search: req.query.key}}).exec((err, docs)=>{
    if (err){
      res.status(404).send(err);
    }
    res.status(200).json(docs);
  })
})

module.exports = router;
