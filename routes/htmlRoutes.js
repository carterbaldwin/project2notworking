var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      //res.render("index", {
        res.render("search", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/bar/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("bar", {
        example: dbExample
      });
    });
  });

  //WIP
  app.get("/bar", function(req, res) {
    // request.body hidden field change id to that

    console.log("req " + req)
    console.log("res " + res)

    db.Bar.findOne({ where: { id: req.body.id } }).then(function(dbBar) {
      console.log("req " + req)
      console.log("res " + res)

      res.render("bar", {
        bar: dbBar
        
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
