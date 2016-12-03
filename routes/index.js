const express = require("express");
const router = express.Router();

import { renderToString } from "react-dom/server";
import Clock from "../public/javascripts/components/clock";
import React from "react";



/* GET home page. */
router.get("/", function(req, res) {
  const markup = renderToString(<Clock />);

  res.render("index", {
    title: "Express",
    markup: markup
  });
});

module.exports = router;
