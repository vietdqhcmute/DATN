const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const key = require("./key");
aws.config.update({
  secretAccessKey: key.SECRET_KEY,
  accessKeyId: key.ACCESS_KEY,
  region: "us-east-1" // region of your bucket
});
const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "nodejs-server-image",
    acl: "public-read-write",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
