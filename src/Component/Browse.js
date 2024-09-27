import React from 'react'
import Header from './Header'
import useNowplayingMovies from '../hooks/useNowplayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'

const Browse = () => {

  useNowplayingMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
