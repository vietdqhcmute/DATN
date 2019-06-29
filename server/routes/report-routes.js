const express = require("express");
const router = express.Router();
const ReportTag = require("../models/ReportTag");

//Create document of tag if tag has not exist
router.post("/tag", (req, res) => {
  ReportTag.findOne({ _tag: req.body._tag }, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!data) {
      const reportTag = new ReportTag(req.body);
      reportTag.save((error, resp) => {
        if (error) {
          return res.status(500).send(error);
        }
        console.log(req.body);
        return res.status(200).send(resp);
      });
    } else {
      return res.status(401).send("Tag has been created for report");
    }
  });
});
//Get tag report populate by id
router.get("/tags", async (req, res) => {
  const reportTag = await ReportTag.find().populate("_tag");
  console.log(reportTag);
  return res.status(200).send(reportTag);
});
// Push user in candidate field
router.put("/tag/candidate", async (req, res) => {
  let reportTag = await ReportTag.findOne({ _tag: req.body._tag });
  if (reportTag._candidates.indexOf(req.body.candidate_id) === -1) {
    //If candidate not in this tag before
    reportTag._candidates.push(req.body.candidate_id);
    reportTag._candidates.sort();
    reportTag.candidates_count = reportTag._candidates.length;
    reportTag.save();
    console.log(reportTag);
    return res.status(200).send("Success!");
  } else {
    console.log(reportTag._candidates);
    return res
      .status(401)
      .send("Has tagged before");
  }
});
//Push article in article field
router.put("/tag/article", async (req, res) => {
  let reportTag = await ReportTag.findOne({ _tag: req.body._tag });
  if (reportTag._articles.indexOf(req.body.article_id) === -1) {
    //If candidate not in this tag before
    reportTag._articles.push(req.body.article_id);
    reportTag._articles.sort();
    reportTag.articles_count = reportTag._articles.length;
    reportTag.save();
    console.log(reportTag);
    return res.status(200).send("Success!");
  } else {
    console.log(reportTag._articles);
    return res
      .status(401)
      .send("Has tagged before");
  }
});
module.exports = router;
