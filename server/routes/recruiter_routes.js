const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");
const Article = require("../models/Article");
const Review = require('../models/Review');
const ReviewPost = require("../models/ReviewPost");

const today = new Date;

//Getting by ID
router.get("/recruiter/:id", async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);
    res.status(200).json(recruiter);
  } catch (err) {
    res.status(404).send(err);
  }
});
// Get all recruiter
router.get("/recruiters", async(req, res) => {
  try{
    const recruiters = await Recruiter.find();
    res.send(recruiters);
  }catch(err){
    console.log(err);
  }
});
//Getting recruiter by email
router.get("/recruiter/email/:email", async (req, res) => {
  try {
    const recruiter = await Recruiter.findOne({
      email: req.params.email
    });
    res.status(200).json(recruiter);
  } catch (err) {
    res.status(404).send(err);
  }
});
//Update recruiter by ID
router.put("/update/recruiter/:id", async (req, res) => {
  try {
    await Recruiter.findByIdAndUpdate({
        _id: req.params.id
      },
      req.body, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
      }
    );
    res.status(200).redirect("/recruiter/" + req.params.id);
  } catch (err) {
    res.status(500).json({
      message: "Update failed!"
    });
  }
});
//---------------------------------------------------------------------------------------------
//RECRUIT POST
//create post in recruit post by email
router.post("/article/", (req, res) => {
  let requestArticle = new Article({
    email_company: req.body.email_company,
    avatar_url: req.body.article.avatar_url,
    title: req.body.article.title,
    description: req.body.article.description,
    salary: req.body.article.salary,
    tag: req.body.article.tag,
    created_at: today,
    updated_at: today
  });
  requestArticle.save((err, data) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).send(data);
  });
});

//get All post by email company
router.get("/articles/:email_company", (req, res) => {
  Article.find({
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
  Article.findByIdAndUpdate(req.params.id, {
    title: req.body.article.title,
    description: req.body.article.description,
    tag: req.body.article.tag,
    salary: req.body.article.salary,
    updated_at: today
  }, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).json(data);
    }
  });
});
//delete post by email company and post id
router.delete("/article/:id", async (req, res) => {
  Article.findByIdAndDelete(req.params.id, (err,data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(data);
  });
});
//-------------------------------------------------------------------------------------------------
//REVIEW
//Create review by company_name
router.post("/add/review/:email", (req, res) => {
  const review = new Review({
    email: req.params.email
  });
  review.save((err, data) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).send(data);
  });
});
//Push a review article to company_review
router.put("/push/review/:email", (req, res) => {
  let requestReviewPost = new ReviewPost({
    title: req.body.title,
    rate_general: req.body.rate_general,
    rate_training: req.body.rate_training,
    rate_care: req.body.rate_care,
    rate_culture: req.body.rate_culture,
    rate_infrastructure: req.body.rate_infrastructure,
    ot_like: req.body.ot_like,
    ot_hate: req.body.ot_hate,
    like: req.body.like,
    hate: req.body.hate,
    isIntroduce: req.body.isIntroduce,
  });
  Review.findOneAndUpdate({
      email: req.params.email
    }, {
      $push: {
        review_posts: requestReviewPost
      }
    },
    (error, data) => {
      if (!data) {
        return console.log("It is null!");
      }
      return res.send(data);
    }
  );
});
module.exports = router;
