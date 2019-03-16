const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();

// var connectionString = 'mongodb://lytutronga6:lytutronga6@tlcn-1-shard-00-00-looeq.mongodb.net:27017,tlcn-1-shard-00-01-looeq.mongodb.net:27017,tlcn-1-shard-00-02-looeq.mongodb.net:27017/test?ssl=true&replicaSet=TLCN-1-shard-0&authSource=admin&retryWrites=true';
var connectionString = "mongodb://lytutronga6:lytutronga6@datn-cluster-shard-00-00-p9e6i.mongodb.net:27017,datn-cluster-shard-00-01-p9e6i.mongodb.net:27017,datn-cluster-shard-00-02-p9e6i.mongodb.net:27017/test?ssl=true&replicaSet=DATN-cluster-shard-0&authSource=admin&retryWrites=true"
// connection to db
mongoose.connect(connectionString, {
    dbName: 'CV-db'
  })
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));


// settings
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use("/images",express.static(path.join("../server/images")));

//Morgan
app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
//enable cross-origin resource sharing (CORS) 
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  next();
});
// importing routes
const indexRoutes = require('./routes/api-routes');
const authRoutes = require('./auth');
const adminRoutes = require('./routes/admin-routes');
const statisticRoutes = require('./routes/statistic-routes');
const awsRoutes = require('./routes/aws-routes');
const candidate_routes = require('./routes/candidate_routes');
const recruiter_routes = require('./routes/recruiter_routes');
const tag_routes = require('./routes/tag_routes');
// routes
app.use('/', indexRoutes);
app.use('/',authRoutes);
app.use('/',adminRoutes);
app.use('/',statisticRoutes);
app.use('/',awsRoutes);
app.use('/',candidate_routes);
app.use('/',recruiter_routes);
app.use('/',tag_routes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
