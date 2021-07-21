import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { url, apiKey, posterUrl } from '../../service/index'

import MovieCard from './MovieCard'

// import classes from './MovieDetail.module.css'

export const MovieDetail = () => {
  const params = useParams()
  const [movieDetail, setMovieDetail] = React.useState({})

  const movieUrl = `${url}/movie/${params.movieId.slice(1)}?api_key=${apiKey}`

  React.useEffect(() => {
    axios.get(movieUrl).then(response => setMovieDetail(response.data))
  }, [movieUrl])

  const poster = posterUrl + movieDetail?.backdrop_path

  console.log(movieDetail)

  return (
    <div style={{ marginTop: '92px' }}>
      <MovieCard
        poster={poster}
        movieTitle={movieDetail.title}
        ranking={movieDetail.vote_average}
      />
    </div>
  )
}
