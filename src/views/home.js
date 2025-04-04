import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forthright Delicious Cattle</title>
        <meta property="og:title" content="Forthright Delicious Cattle" />
      </Helmet>
    </div>
  )
}

export default Home
