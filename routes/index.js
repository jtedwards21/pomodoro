const express = require("express");
const router = express.Router();

import { renderToString } from "react-dom/server";
import Clock from "../public/javascripts/components/clock";
import React from "react";

var numbers = {
      shortBreakTime: 7,
      longBreakTime: 0,
      workTime: 0,
      cishu: 0
    };

/* GET home page. */
router.get("/", function(req, res) {
  const markup = renderToString(<Clock numbers={numbers} />);

  res.render("index", {
    title: "Express",
    markup: markup
  });
});

module.exports = router;
