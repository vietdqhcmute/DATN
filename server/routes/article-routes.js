const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

const today = new Date();

module.exports = router;
//create post in recruit post by email
router.post("/", (req, res) => {
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
    requestArticle.on("es-indexed", function(err, res) {
      if (err) {
        console.error("Elastic search is down");
      }
    });
    res.status(200).send(data);
  });
});
//get 10 recent articles
router.get("/articles/recent", (req, res) => {
  Article.find({})
    .sort({ created_at: -1 })
    .limit(10)
    .exec(function(err, articles) {
      if (err) {
        return res.status(500).json(err);
      }
      res.status(200).send(articles);
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
router.get("/:id", async (req, res) => {
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

//update article by email company and article id
router.put("/:id", (req, res) => {
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
router.delete("/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  article.remove((err, resp) => {
    if (err) {
      return res.status(500).send(err);
    }
    article.on("es-removed", (err, res) => {
      if (err) throw err;
    });
    res.status(200).send(resp);
  });
});
//Apply candidate for article
router.put("/apply/:id", async (req, res) => {
  const query = await Article.findById(req.params.id).select("applied");
  let applies = query.applied;
  if (applies.indexOf(req.body.email) !== -1) {
    return res.status(200).send("You've already applied for this job");
  } else {
    applies.push(req.body.email);
    query.save((err, callback) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(callback);
    });
  }
});
//Get all email applied
router.get("/applies/:id", async (req, res) => {
  const query = await Article.findById(req.params.id).select("applied");
  const applies = query.applied;
  return res.status(200).json(applies);
});
