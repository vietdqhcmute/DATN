const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");
const RecruitPost = require("../models/RecruitPost");
const Article = require("../models/Article");
const Review = require('../models/Review');
const ReviewPost = require("../models/ReviewPost");

//Getting by ID
router.get("/recruiter/:id", async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);
    res.status(200).json(recruiter);
  } catch (err) {
    res.status(404).send(err);
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
//Updating by ID
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
//create recruitpost by company_name
router.post("/add/recruit-post/:company_name", (req, res) => {
  const recruitPost = new RecruitPost({
    company_name: req.params.company_name
  });
  recruitPost.save((err, data) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).send(data);
  });
});

//create post in recruit post by company_name
router.post("/push/recruit-post", (req, res) => {
  let requestArticles = new Article({
    title: req.body.article.title,
    description: req.body.article.description,
    salary: req.body.article.salary,
    tag: req.body.article.tag,
    updated_at: Date.now
  });
  RecruitPost.findOneAndUpdate({
      company_name: req.body.company_name
    }, {
      $push: {
        articles: requestArticles
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

//get All post by company_name
router.get("/recruit-post/:company_name", (req, res) => {
  RecruitPost.findOne({
      company_name: req.params.company_name
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

// Get specific post by ID and company_name
router.get("/recruit-post/:company_name/:id", async (req, res) => {
  RecruitPost.findOne({
    company_name: req.params.company_name
  }, async (error, data) => {
    let result = data.articles.filter(element => {
      return element._id.toString() === req.params.id.toString();
    });
    res.send(result[0]);
  })

});

//-------------------------------------------------------------------------------------------------
//REVIEW
//Create review by company_name
router.post("/add/review/:company_name", (req, res) => {
  const review = new Review({
    company_name: req.params.company_name
  });
  review.save((err, data) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).send(data);
  });
});
//Push a review article to company_review
router.post("/push/review", (req, res) => {
  let requestReviewPost = new ReviewPost({
    display_name: req.body.review_post.display_name,
    title: req.body.review_post.title,
    rate: req.body.review_post.rate,
    like: req.body.review_post.like,
    not_like: req.body.review_post.not_like,
    created_at: Date.now,
    updated_at: Date.now
  });
  Review.findOneAndUpdate({
      company_name: req.body.company_name
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
//Get all review of company
router.get("/review/:company_name", (req, res) => {
  Review.findOne({
      company_name: req.params.company_name
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
module.exports = router;
