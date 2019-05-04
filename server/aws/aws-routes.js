const express = require("express");
const router = express.Router();
const upload = require('./aws-config');

const singleUpload = upload.single('image')

router.post('/image_upload', function(req, res) {
  singleUpload(req, res, function(err, some) {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }

    return res.json({'imageUrl': req.file.location});
  });
})

router.get('/images', function(req,res){
  return res.status(200).send("Test aws");
})
module.exports = router;
