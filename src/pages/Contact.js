import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//componente productSection despliega todas las categorías

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
      <h1>Contacto</h1>
      <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
