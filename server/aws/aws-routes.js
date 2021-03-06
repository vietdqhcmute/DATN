const express = require("express");
const router = express.Router();
const upload = require("./aws-config");

const singleUpload = upload.single("image");

router.post("/image_s3", function(req, res) {
  singleUpload(req, res, function(err, some) {
    if (err) {
      return res
        .status(422)
        .send({
          errors: [{ title: "Image Upload Error", detail: err.message }]
        });
    }
    console.log(req.file.location);
    return res.json({ imageUrl: req.file.location });
  });
});
module.exports = router;
