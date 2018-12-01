import React from 'react'
import { Link } from 'gatsby'

const Header = ({ title }) => (
  <Helmet
    title={title}
    meta={[
      { name: 'description', content: "Matthew Bunday's personal website" },
      { name: 'keywords', content: 'Matthew Bunday, taijutsu, programming, meditation' },
      { name: 'google-site-verification', content: '4NtVfKdG2gUQGMyubvmtuKAOLNs0g_Xu6hujNRTjGzg' },
    ]}
  >
    <html lang="en" />
  </Helmet>
)

export default Header
