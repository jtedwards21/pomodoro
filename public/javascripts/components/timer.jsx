import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      minutes: 0,
      seconds: 0
    };
  }
  
　　render() {
    return (
	<div>
          <div className="info-box">You are currently {this.props.currentAction} for {this.props.currentTimeLength}</div>
	  <div>Remaining Minutes: {this.state.remainingMinutes}</div>
	  <div>Remaining Seconds {this.state.remainingSeconds}</div>
	</div>


    )
  }
}


	
