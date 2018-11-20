import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Image from '../components/image'
import Projects from '../components/projects'

class IndexPage extends React.Component {
  render() {
    const projects = get(this, 'props.data.allContentfulProject.edges')
    console.log(projects)

    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <Projects projects={projects} />
      </Layout>
    )
  }
}

export default IndexPage

export const projectQuery = graphql`
  query HomeQuery {
    allContentfulProject {
      edges {
        node {
          name
          publishedDate
          image {
            fluid(maxWidth: 1600, maxHeight: 1600) {
              ...GatsbyContentfulFluid
            }
          }
          githubUrl
          description
          liveUrl
          tech
        }
      }
    }
  }
`
