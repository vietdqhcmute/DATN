const express = require('express');
const router = express.Router();
const checkAuth = require('../check-auth');

const Statistic = require('../models/Statistic');

//API post template count
router.post('/add/template/:id', async(req,res)=>{
    try{
        const statistic = new Statistic({
            userID: req.params.id,
            template: req.body.template
        });
        await statistic.save();
        res.redirect('/template/all');
    }catch (error){
        console.log(error);
    }
});

//API get alll template count
router.get('/template/all', async(req, res)=>{
    try{
        const statistic = await Statistic.find();
        res.status(200).json(statistic);
    }catch(err){
      console.log(err);
    }
});

//API count all item
router.get('/count/template/all', async(req,res)=>{
    try{
        var countDefault = await Statistic.countDocuments({template:'default'});
        var countRedTop = await Statistic.countDocuments({template:'red-top'});
        var countBlueTop = await Statistic.countDocuments({template:'blue-top'});
        var countRedSide = await Statistic.countDocuments({template:'red-side'});
        var countBlueSide = await Statistic.countDocuments({template:'blue-side'});
        var countAll = await Statistic.countDocuments({});

        var defaultRate = percentage(countDefault, countAll);
        var redTopRate = percentage(countRedTop, countAll);
        var blueTopRate = percentage(countBlueTop, countAll);
        var redSideRate = percentage(countRedSide, countAll);
        var blueSideRate = percentage(countBlueSide, countAll);

        res.status(200).json({
            defaultRate:defaultRate,
            redTopRate:redTopRate,
            blueTopRate:blueTopRate,
            redSideRate:redSideRate,
            blueSideRate:blueSideRate
        })
    }catch (err){
        console.log(err);
    }
});

var percentage = function(element, total) {
    let percent = Math.round( (element/total)*100);
    return percent;
}
module.exports = router;


