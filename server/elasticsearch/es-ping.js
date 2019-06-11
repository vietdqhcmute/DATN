const elasticsearch = require("./es-client");
module.exports = function() {
  elasticsearch.ping({ requestTimeout: 30000 }, function(error) {
    if (error) {
      console.error("elasticsearch cluster is down!");
    } else {
      console.log("Elastic Search is running");
    }
  });
};
