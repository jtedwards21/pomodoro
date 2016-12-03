import React from "react";

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };


  }
　　render() {
    return (
	<div className="clock-component">
	    <button className="btn btn-default btn-large" onClick={this.props.showMenu}>Show</button>
            <div id="countdown-clock" className=""></div>
	</div>	
    )
  }
}


	
