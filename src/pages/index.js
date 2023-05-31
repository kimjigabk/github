import * as React from "react"
import { graphql, Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => {
  console.log(data)
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  return (
    <Layout>
      <div className={styles.textLeft}>
        {/* <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        /> */}
        <div>
          <h1>List of Projects</h1>
          {/* <h4>{allMarkdownRemark.totalCount}</h4> */}
          {edges.map(({ node }) => {
            return (
              <div key={node.id}>
                <span>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </span>
                <p>{node.frontmatter.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            description
            title
          }
        }
      }
    }
  }
`
