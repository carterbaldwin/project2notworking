var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/bar/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    console.log("req " + req)
    console.log("res " + res)

    db.Bar.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Example]
    }).then(function(dbBar) {
      res.json(dbBar);
    });
  });

  app.post("/api/bar/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    console.log("req " + req)
    console.log("res " + res)

    db.Bar.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Example]
    }).then(function(dbBar) {
      res.json(dbBar);
    });
  });



};
