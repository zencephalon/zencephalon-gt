import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

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
        <header>
          <div id="logo">
            <Link to="/">
              <img src={logo} alt="Logo" class="logo" />
            </Link>
          </div>
        </header>
        {children}
        <footer>
          © Matthew Bunday 2010-2019. <Link to="/iluvu">ILUVU</Link>.
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
