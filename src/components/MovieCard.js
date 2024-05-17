import React from 'react'
import { moviePosterUrl } from '../img/imageUrls'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-4'>
      <img alt="img-poster" src={moviePosterUrl + posterPath}/>
    </div>
  )
}

export default MovieCard
