import React from 'react'
import { posterUrl } from '../img/imageUrls'

const CardTemplate = ({posterPath}) => {
  return (
    <div className='w-40 pr-4'>
      <img alt="img-poster" src={posterUrl+ posterPath}/>
    </div>
  )
}

export default CardTemplate
