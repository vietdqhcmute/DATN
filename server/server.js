const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const elasticsearch = require("./elasticsearch/es-service");
const app = express();

// var connectionString = "mongodb://lytutronga6:lytutronga6@datn-cluster-shard-00-00-p9e6i.mongodb.net:27017,datn-cluster-shard-00-01-p9e6i.mongodb.net:27017,datn-cluster-shard-00-02-p9e6i.mongodb.net:27017/test?ssl=true&replicaSet=DATN-cluster-shard-0&authSource=admin&retryWrites=true"
// connection to db
const connectionString = "mongodb://localhost:27017/datn"; //local mongodb
mongoose.disconnect().then(
  mongoose
    .connect(connectionString, {
      dbName: "CV-db"
    })
    .then(db => {
      console.log("db connected");
    })
    .catch(err => console.log(err))
);
//Comment this if you don't have elastic search container
elasticsearch.ping();
// settings
app.set("port", process.env.PORT || 5000);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
// app.use("/images",express.static(path.join("../server/images")));

//Morgan
app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: false
  })
);
//enable cross-origin resource sharing (CORS)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization "
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  next();
});
// importing routes
const indexRoutes = require("./routes/api-routes");
const authRoutes = require("./auth");
const adminRoutes = require("./routes/admin-routes");
const statisticRoutes = require("./routes/statistic-routes");
const awsRoutes = require("./aws/aws-routes");
const candidateRoutes = require("./routes/candidate-routes");
const recruiterRoutes = require("./routes/recruiter-routes");
const tagRoutes = require("./routes/tag-routes");
const reviewRoutes = require("./routes/review-routes");
const searchingRoutes = require("./routes/searching-routes");
const articleRoutes = require("./routes/article-routes");
const elasticsearchRoutes = require("./routes/elasticsearch-route");
const reportRoutes = require("./routes/report-routes");
// routes
app.use("/", indexRoutes);
app.use("/", authRoutes);
app.use("/admin/", adminRoutes);
app.use("/", statisticRoutes);
app.use("/", awsRoutes);
app.use("/", candidateRoutes);
app.use("/", recruiterRoutes);
app.use("/", tagRoutes);
app.use("/", reviewRoutes);
app.use("/article", articleRoutes);
app.use("/search", searchingRoutes);
app.use("/elastic", elasticsearchRoutes);
app.use("/report", reportRoutes);

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
