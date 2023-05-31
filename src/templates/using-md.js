import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingMD = ({ data }) => {
  const post = data.markdownRemark
  let featuredImg =
    post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <GatsbyImage image={featuredImg} />
        <p></p>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title} />
)

export default UsingMD

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`
