import { Component } from "react";
import "./projectTemplate.css";
import TechInfo from "./techInfo";

class projectTemplate extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: props.text || "Error",
      projectInfoText: props.projectInfoText || "Error",
      projectTech: props.projectTech || [],
      live_link: props.live_link || null,
      github_link: props.github_link || "Error"
    }
  }

  render() {
    const createTechInfo = this.state.projectTech.map((item, index) => (
      <TechInfo key={index} name={item}></TechInfo>
    ));

    return (
      <>
      <div className="project-container-specific">
        <p className="project-title">{this.state.text}</p>
        <p className="project-description">{this.state.projectInfoText}</p>
        <div>
         {createTechInfo}
         <a href={this.state.github_link} target="_blank" className="tech-info right" rel="noreferrer">
          Github</a>
         {this.state.live_link && 
          <a href={this.state.live_link} target="_blank" className="tech-info right" rel="noreferrer">
            Website</a>
        }
        </div>
      </div>
      </>
    );
  }
}

export default projectTemplate;