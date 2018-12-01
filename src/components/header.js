import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

const Header = ({ title }) => (
  <Helmet
    title={title}
    meta={[
      { name: 'description', content: "Matthew Bunday's personal website" },
      { name: 'keywords', content: 'Matthew Bunday, taijutsu, programming, meditation' },
    ]}
  >
    <html lang="en" />
  </Helmet>
)

export default Header
