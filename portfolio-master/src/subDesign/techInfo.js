import React, { Component } from "react";
import "./techInfo.css";

class techInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name || "Error",
    }
  }
  render() {
    return(
      <div className="tech-info">
        {this.state.name}
      </div>
    );
  }
}

export default techInfo;