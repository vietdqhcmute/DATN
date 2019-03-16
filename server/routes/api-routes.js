const express = require('express');
const router = express.Router();
// const checkAuth = require('../check-auth');
const multer = require('multer');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }

});

//API add picture to server and return imagePath
router.post('/add/picture', multer({
  storage: storage
}).single("image"), async (req, res) => {
  const url = req.protocol + '://' + req.get("host");
  let imagePath = url + "/images/" + req.file.filename;
  res.status(200).json({
    avatarUrl: imagePath
  })
});

module.exports = router;
