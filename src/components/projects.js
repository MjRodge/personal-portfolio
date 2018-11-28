import React from 'react'
import Img from 'gatsby-image'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

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
              <Paper className="project-paper">
                <h2>{node.name}</h2>
                <hr />
                <ul className="project-tech">
                  {node.tech.map(tech => (
                    <li key={tech} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
                <p>{node.description}</p>
                <Button
                  variant="contained"
                  className="project-button"
                  href={node.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<FaGithub className="project-icon project-icon-github" />}
                  View Source{' '}
                  {
                    <FaExternalLinkAlt className="project-icon project-icon-external" />
                  }
                </Button>
                <Button
                  variant="contained"
                  className="project-button"
                  href={node.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo{' '}
                  {
                    <FaExternalLinkAlt className="project-icon project-icon-external" />
                  }
                </Button>
              </Paper>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Projects
