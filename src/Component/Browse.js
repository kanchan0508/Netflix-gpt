import React from 'react'
import Header from './Header'
import useNowplayingMovies from '../hooks/useNowplayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrending from '../hooks/useTrending'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {

  useNowplayingMovies()
  usePopularMovies()
  useTrending()
  useUpcomingMovies()
  return (
    <div className='w-screen'>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
