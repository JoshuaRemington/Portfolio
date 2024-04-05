import './Portfolio.css';
import React, {useState} from 'react';
import Contact from './subDesign/contact';
import ProjectTemplate from "./subDesign/projectTemplate";

function Portfolio() {
  const [currentlyDisplaying, setCurrentlyDisplaying] = useState("landing-page");
  function navbar(name)
  {
    setCurrentlyDisplaying(name)
  }
  const [projectPage, setProjectPage] = useState(1);
  function changeProjectsShowing(number)
  {
    setProjectPage(number);
  }

  return (
  <div className="main">
    <div className="main-container">
        {(currentlyDisplaying === "landing-page") &&
      <div id="landing-page" className="landing-page-container">
        <h1 id="name" className="name">Joshua Remington
        <br></br>
        <p className="paragraph-text">Software Engineer</p>
        </h1>
      </div>
      }

    {(currentlyDisplaying === "about") &&
      <div id="about" className="landing-page-container">
        <h1 id="name" className="name">About Me
        <br></br>
        <p className='paragraph-text'>I am Josh Remington, a fourth year student at CSU San Marcos. I enjoy many different fields of coding including game and web development. I enjoy reading in my spare time as well as discovering new music</p>
        </h1>
      </div>
      }


    {(currentlyDisplaying === "projects") &&
      <div id="projects" className="landing-page-container display-inline">
        <h1 id="name" className="name">Projects<br></br>
        {(projectPage === 1) &&
        <div className="project-container">
          <ProjectTemplate 
            id="pv"
            text="Pathfinding Visualization" 
            projectInfoText="The Pathfinding Visualizer is an interactive web application that allows users to visualize various pathfinding algorithms in action. This tool provides a visual representation of how algorithms like Dijkstra's, A*, and others find the shortest path between two points on a grid. It is a great educational tool for learning and understanding different pathfinding techniques."
            projectTech={["React", "Javascript", "Html", "CSS"]}
            live_link="https://joshuaremington.github.io/pathfindingvisualization/"
            github_link="https://github.com/JoshuaRemington/pathfindingvisualization"
          ></ProjectTemplate>
          <ProjectTemplate 
            id="uc"
            text="Unity Chess" 
            projectInfoText="Unity-based chess engine, meticulously engineered to demonstrate the synergy between advanced programming techniques and game development. Leveraging bitwise operations for unparalleled efficiency, this engine employs the Minimax algorithm and Alpha-Beta pruning to deliver strategic gameplay experiences."
            projectTech={["C#", "Unity"]}
            github_link="https://github.com/JoshuaRemington/UnityChess"
          ></ProjectTemplate>
          <button className="navbar-button right down" onClick={() => changeProjectsShowing(2)}>More Projects...</button>
        </div>
        } 
        {(projectPage === 2) &&
        <>
          <div className='project-container'>
            <ProjectTemplate
              id="pl"
              text="Python Lexer W/ GUI"
              projectInfoText="Unity-based chess engine, meticulously engineered to demonstrate the synergy between advanced programming techniques and game development. Leveraging bitwise operations for unparalleled efficiency, this engine employs the Minimax algorithm and Alpha-Beta pruning to deliver strategic gameplay experiences."
              projectTech={["Python", "Tkinter"]}
              github_link="https://github.com/JoshuaRemington/LexerWithGui"
            ></ProjectTemplate>
          </div>
          <br></br>
          <button className="navbar-button left down" onClick={() => changeProjectsShowing(1)}>Back</button>
          </>
        }
        </h1>
      </div>
      }

    {(currentlyDisplaying === "contact") &&
      <div id="contact" className="landing-page-container">
        <Contact></Contact>
      </div>
      }

    <div id="navbar" className="navbar">
        <button className="navbar-button" onClick={() => navbar("landing-page")}>Home</button>  <br></br>
        <button className="navbar-button" onClick={() => navbar("about")}>About</button>  <br></br>
        <button className="navbar-button" onClick={() => navbar("projects")}>Projects</button>  <br></br>
        <button className="navbar-button" onClick={() => navbar("contact")}>Contact Me</button> <br></br>
    </div>
  </div>
  </div>);
}

export default Portfolio;
