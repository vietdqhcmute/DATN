const elasticsearch = require("elasticsearch");
const elasticClient = new elasticsearch.Client({
  host: "localhost:9200",
  log: ["info", "error"]
});

module.exports = {
  //Followed https://medium.com/@siddharthac6/elasticsearch-node-js-b16ea8bec427
  ping: () => {
    elasticClient.ping({ requestTimeout: 30000 }, function(error) {
      if (error) {
        console.error("elasticsearch cluster is down!");
      } else {
        console.log("Elastic Search is running");
      }
    });
  },

  initIndex: (req, res, indexName) => {
    elasticClient.indices.create({ index: indexName }).then(
      resp => {
        console.log(resp);
        res.status(200);
        return res.json(resp);
      },
      err => {
        console.log(err);
        res.status(500);
        return res.json(err);
      }
    );
  },

  indexExists: (req, res, indexName) => {
    elasticClient.indices.exists({ index: indexName }).then(
      resp => {
        console.log(resp);
        res.status(200);
        return res.json(resp);
      },
      err => {
        console.log(err);
        res.status(500);
        return res.json(err);
      }
    );
  },

  initMapping: (req, res, indexName, docType, payload) => {
    elasticClient.indices
      .putMapping({
        index: indexName,
        type: docType,
        body: payload
      })
      .then(
        resp => {
          console.log(resp);
          res.status(200);
          return res.json(resp);
        },
        err => {
          console.log(err);
          res.status(500);
          return res.json(err);
        }
      );
  },

  addDocument: (req, res, indexName, _id, docType, payload) => {
    elasticClient.index({
      index: indexName,
      type: docType,
      id: _id,
      body: payload
    })
  },

};
