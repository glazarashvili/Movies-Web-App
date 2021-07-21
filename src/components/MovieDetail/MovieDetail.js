import React from 'react'
import axios from 'axios'
import { url, apiKey, posterUrl } from '../../service/index'

import { useParams } from 'react-router-dom'
import MovieCard from './MovieCard'

// import classes from './MovieDetail.module.css'

export const MovieDetail = () => {
  const params = useParams()

  const [movieDetail, setMovieDetail] = React.useState()

  const movieUrl = `${url}/movie/${params.movieId.slice(1)}?api_key=${apiKey}`

  React.useEffect(() => {
    axios.get(movieUrl).then(response => setMovieDetail(response.data))
  }, [])

  console.log(movieDetail)

  // const backImage =

  return (
    <div style={{ marginTop: '92px' }}>
      <MovieCard backImage={posterUrl + movieDetail?.backdrop_path} />
    </div>
  )
}
