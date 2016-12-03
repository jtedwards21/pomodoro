import React from "react";

export default class Adjuster extends React.Component {
  constructor() {
    super();

    this.state = {
    };


  }
　　render() {
    return (
	<div className="adjuster col-md-4 col-md-offset-4">
	<div className="">

	  <div className="title">Settings</div>

	  <form　className="form-horizontal">
	  <div className="form-group setting-group">
	　　  <label className="control-label col-md-2">Short Break</label>
	    <div className="input-group col-md-8 col-md-offset-2">
	      <div className="input-group-addon" onClick={this.props.shortBreakMinus}><i className="glyphicon glyphicon-minus"></i></div>
              <div className="form-control">{this.props.shortBreakTime}</div>
	      <div className="input-group-addon"  onClick={this.props.shortBreakPlus}><i className="glyphicon glyphicon-plus"></i></div>
	    </div>
	  </div>

	　　<div className="form-group setting-group">
	　　  <label className="control-label col-md-2">Long Break</label>
	    <div className="input-group col-md-8 col-md-offset-2">
	      <div className="input-group-addon" onClick={this.props.longBreakMinus}><i className="glyphicon glyphicon-minus"></i></div>
              <div className="form-control">{this.props.longBreakTime}</div>
	      <div className="input-group-addon"  onClick={this.props.longBreakPlus}><i className="glyphicon glyphicon-plus"></i></div>
	    </div>
 	  </div>

	　　<div className="form-group setting-group">
	　　  <label className="control-label col-md-2">Work Time</label>
	    <div className="input-group col-md-8 col-md-offset-2">
	      <span className="input-group-addon" onClick={this.props.workTimeMinus}><i className="glyphicon glyphicon-minus"></i></span>
              <div className="form-control">{this.props.workTime}</div>
	      <span className="input-group-addon"  onClick={this.props.workTimePlus}><i className="glyphicon glyphicon-plus"></i></span>
	    </div>
	  </div>

	　　<div className="form-group setting-group">
	　　  <label className="control-label col-md-2"># of Times</label>
	    <div className="input-group col-md-8 col-md-offset-2">
	      <span className="input-group-addon" onClick={this.props.cishuMinus}><i className="glyphicon glyphicon-minus"></i></span>
              <div className="form-control">{this.props.cishu}</div>
	      <span className="input-group-addon"  onClick={this.props.cishuPlus}><i className="glyphicon glyphicon-plus"></i></span>
	    </div>
	  </div>
	  </form>
	
	  <span className="text-center glyphicon glyphicon-off"　onClick={this.props.hideMenu}></span>
	</div>
	</div>


    )
  }
}


	
