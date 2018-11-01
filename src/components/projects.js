import React from 'react'
import Img from 'gatsby-image'

class Projects extends React.Component {
  render() {
    const projects = this.props.projects
    return (
      <div>
        {projects.map(({ node }, i) => (
          <div className="project" key={i}>
            <Img fixed={node.image.fixed} />
            <h2>{node.name}</h2>
            <p>{node.description}</p>
            <a href={node.githubUrl}>Source Code</a>
            <a href={node.liveUrl}>Project Demo</a>
            {node.tech.map(tech => (
              <p key={tech}>{tech}</p>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default Projects
