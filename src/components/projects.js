import React from 'react'
import Img from 'gatsby-image'

import './styles/projects.css'

class Projects extends React.Component {
  render() {
    const projects = this.props.projects
    return (
      <div id="projects-container">
        {projects.map(({ node }, i) => (
          <div className="project" key={i}>
            <Img fluid={node.image.fluid} className="project-image" />
            <div className="project-info">
              <h2>{node.name}</h2>
              {node.tech.map(tech => (
                <p key={tech}>{tech}</p>
              ))}
              <p>{node.description}</p>
              <a href={node.githubUrl}>Source Code</a>
              <a href={node.liveUrl}>Project Demo</a>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Projects
