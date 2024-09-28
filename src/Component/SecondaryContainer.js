import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movie = useSelector(store => store.movie)
  return (
    <div className='bg-black'>
      <div className='-mt-80 pl-12 relative z-20'>
        <MovieList title={"Now Playing "} movies={movie?.nowPlaying} />
        <MovieList title={"Trending "} movies={movie?.Trending} />
        <MovieList title={"Popular"} movies={movie?.Popular} />
        <MovieList title={"Upcoming"} movies={movie?.Upcoming} />
      </div>
      
    </div>
  )
}

export default SecondaryContainer
