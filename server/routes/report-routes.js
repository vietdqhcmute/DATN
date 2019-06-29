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
module.exports = router;
