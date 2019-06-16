const express = require("express");
const router = express.Router();
const checkAuth = require("../check-auth");
const Candidate = require("../models/Candidate");
const Recruiter = require("../models/Recruiter");
// const NewFeed = require('../models/NewFeed');

//Get candidate and status
router.get("/candidates/status", async (req, res) => {
  try {
    const candidates = await Candidate.find().populate("_authentication");
    res.send(candidates);
  } catch (err) {
    console.log(err);
  }
});

//Get candidate and status
router.get("/recruiters/status", async (req, res) => {
  try {
    const recruiters = await Recruiter.find().populate("_authentication");
    res.send(recruiters);
  } catch (err) {
    console.log(err);
  }
});
// //API post newFeed
// router.post('/add/newfeed/:id', checkAuth, async (req, res) => {
//   try {
//     const newFeed = new NewFeed({
//       userID: req.params.id,
//       message: req.body.message
//     });
//     await newFeed.save();
//     res.redirect('/newfeed/all');
//   }catch(err){
//       console.log(err);
//   }
// });

// //API get alll new feed
// router.get('/newfeed/all', checkAuth, async(req, res)=>{
//     try{
//         const newFeed = await NewFeed.find();
//         res.send(newFeed);
//     }catch(err){
//       console.log(err);
//     }
// });

// //API delete new feed by its ID
// router.delete('/delete/newfeed/:id', checkAuth, async(req, res)=>{
//   try{
//     await NewFeed.remove({
//       _id: req.params.id
//     });
//     res.status(200).json({
//       message: "Delete new feed successfully!"
//     });
//   }catch (err){
//     console.log("Can not delete this new feed!");
//   }
// });

// //API delete all new feed of userID

module.exports = router;
