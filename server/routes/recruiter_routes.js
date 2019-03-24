const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");
const RecruitPost = require("../models/RecruitPost");
const Article = require("../models/Article");
//Adding
router.post("/add/recruiter", (req, res) => {
  const recruiter = new Recruiter(req.body);
  recruiter.save((err, data) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).redirect("/recruiter/" + data._id);
  });
});
//Getting by ID
router.get("/recruiter/:id", async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id);
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
    "company_name": req.body.company_name
  }, {
    $push: {
      articles: requestArticles
    }
  }, (error, data) => {
    if (!data) {
      return console.log("It is null!");
    }
    return res.send(data);
  })
});

//get All post by company_name
router.get("/recruit-post/:company_name", (req, res) => {
  RecruitPost.findOne({
    company_name: req.params.company_name
  }, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      if (!data) {
        return res.status(500).json("Can not find anything");
      }
      return res.status(200).json(data);
    }
  });
});

module.exports = router;
