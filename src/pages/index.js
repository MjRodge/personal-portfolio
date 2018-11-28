import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Projects from '../components/projects'
import Hero from '../components/hero'

class IndexPage extends React.Component {
  render() {
    const projects = get(this, 'props.data.allContentfulProject.edges')
    console.log(projects)

    return (
      <Layout>
        <Hero />
        <h1>Hi people</h1>
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
