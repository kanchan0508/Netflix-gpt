import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const gpt = useSelector((store)=>store.gpt)
 const {movieResults, movieNames} = gpt

 if(!movieResults) return null;
  return (
    <div className='p-4 m-4 mt-5 bg-black bg-opacity-90'>
      <div>
        {movieNames.map((movieName, index)=>(
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
      </div>
      
    </div>
  )
}

export default GptMovieSuggestion
