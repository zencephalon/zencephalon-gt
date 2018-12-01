import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import logo from '../images/zenchinese.png'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: "Matthew Bunday's personal website" },
            { name: 'keywords', content: 'Matthew Bunday, taijutsu, programming, meditation' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div id="logo"><a href="/"><img src={logo} alt="Logo" class="logo"/></a></div>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
