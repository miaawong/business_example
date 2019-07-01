import React from "react"
import { Link, graphql } from "gatsby"
import Background from "../components/Globals/Background"
import About from "../components/Home/Info"
import ServicesBackground from "../components/Globals/ServicesBackground"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Background img={data.img.childImageSharp.fluid} />
    <About />
    <ServicesBackground img={data.servicesImg.childImageSharp.fluid} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    servicesImg: file(relativePath: { eq: "grass1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default IndexPage
