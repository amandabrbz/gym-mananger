const express = require("express");
const routes = express.Router();
const instructors = require("./instructors");

routes.get("/", function (req, res) {
  return res.redirect("/instructors");
});

routes.get("/instructors", instructors.index);

routes.get("/instructors/create", instructors.create);

routes.get("/instructors/:id", instructors.show);

routes.get("/instructors/:id/edit", instructors.edit);

routes.post("/instructors", instructors.post);

routes.put("/instructors", instructors.put);

routes.delete("/instructors", instructors.delete);

routes.get("/members", function (req, res) {
  return res.render("members/index");
});

module.exports = routes;
