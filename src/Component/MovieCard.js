import React from 'react'
import { IMG_URL } from '../utils/Constant'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48 pr-4'>
      <img alt='Now playing' src={IMG_URL + poster_path } />
    </div>
  )
}

export default MovieCard
