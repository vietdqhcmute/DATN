const elasticsearch = require("elasticsearch");
const elasticClient = new elasticsearch.Client({
  host: "localhost:9200",
  log: "info"
});

module.exports = {
  //Followed https://medium.com/@siddharthac6/elasticsearch-node-js-b16ea8bec427
  client: () => {
    return elasticClient;
  },

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
    elasticClient
      .index({
        index: indexName,
        type: docType,
        id: _id,
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

  search: (req, res, indexName, docType, payload) => {
    elasticClient
      .search({
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

  deleteDocument: (req, res, index, _id, docType) => {
    elasticClient.delete(
      {
        index: index,
        type: docType,
        id: _id
      },
      (err, resp) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Index have been deleted! ", resp);
          return res.json(resp);
        }
      }
    );
  },

  deleteAll: (req, res) => {
    elasticClient.indices.delete(
      {
        index: "_all"
      },
      (err, resp) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Index have been deleted! ", resp);
          return res.json(resp);
        }
      }
    );
  }
};
