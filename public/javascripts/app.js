import React from "react";
import ReactDOM from "react-dom";
import Clock from "components/clock";

var numbers = {
      shortBreakTime: 7,
      longBreakTime: 0,
      workTime: 0,
      cishu: 0
    };

ReactDOM.render(<Clock numbers={numbers} />, document.getElementById("content"));
