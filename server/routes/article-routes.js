const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

const today = new Date();

module.exports = router;
//create post in recruit post by email
router.post("/article/", (req, res) => {
  let requestArticle = new Article({
    email_company: req.body.email_company,
    avatar_url: req.body.article.avatar_url,
    title: req.body.article.title,
    description: req.body.article.description,
    salary: req.body.article.salary,
    tags: req.body.article.tags,
    applied: [],
    created_at: today,
    updated_at: today
  });
  console.log(req.body);
  requestArticle.save((err, data) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).send(data);
  });
});

//get All post by email company
router.get("/articles/:email_company", (req, res) => {
  Article.find(
    {
      email_company: req.params.email_company
    },
    (error, data) => {
      if (error) {
        return console.log(error);
      } else {
        if (!data) {
          return res.status(500).json("Can not find anything");
        }
        return res.status(200).json(data);
      }
    }
  );
});
//get specific article by id
router.get("/article/:id", async (req, res) => {
  Article.findById(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      if (!data) {
        return res.status(500).json("Can not find anything");
      }
      return res.status(200).json(data);
    }
  });
});

//update post by email company and post id
router.put("/article/:id", (req, res) => {
  Article.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.article.title,
      description: req.body.article.description,
      tag: req.body.article.tag,
      salary: req.body.article.salary,
      updated_at: today
    },
    (err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).json(data);
      }
    }
  );
});
//delete post by email company and post id
router.delete("/article/:id", async (req, res) => {
  Article.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(data);
  });
});
//Apply candidate for article
router.put("/article/apply/:id", async (req, res) => {
  const query = await Article.findById(req.params.id).select("applied");
  let applies = query.applied;
  if (applies.indexOf(req.body.email) !== -1) {
    return res.status(200).send("You've already applied for this job");
  } else {
    applies.push(req.body.email);
    query.save((err, callback)=>{
      if (err){
        return res.status(500).send(err);
      }
      return res.status(200).send(callback);
    });
  }
});